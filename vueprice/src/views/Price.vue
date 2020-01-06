<template>
  <div id="wtable" style="width:100%" v-wechat-title="$route.meta.title">
     <div class="header-wrapper m15">
      <pre v-html="headerInfo">
      </pre>
    </div> 
    <div class="tabs-wrap">
        <div class="tabs-item" v-for="(item,index) in nameList" :key="item" @click="getListByName(index)"> 
           <div class="mtabs">
             <div class="tab-text" :class="currentTabIndex == index ? 'activeTab' :''">
                {{item}}
             </div>
           </div>
        </div>
    </div>
    
    <el-table
      :data="tableData"
      border
      stripe
      size="small"
      style="width:100%"
      header-cell-class-name = "headerStyle "
    >
      <el-table-column prop="supplier" label="供应商" min-width="27%"></el-table-column>
      <el-table-column prop="name" label="品名" min-width="10%"></el-table-column>
      <el-table-column prop="price" label="参考批发,(元/吨)" :render-header="renderHeader" min-width="18%">
        <template slot-scope="scope">
          {{scope.row.price}}
          <span v-if="scope.row.trend =='涨'" class="blue">↑</span>
          <span v-else-if="scope.row.trend =='跌'" class="red">↓</span>
        </template>
      </el-table-column>
      <el-table-column prop="density" label="密度" min-width="15%"></el-table-column>
      <el-table-column label="运费,(元)" prop="freight" :render-header="renderHeader" min-width="15%">
        <template slot-scope="scope">
          <div class="el-input el-input--mini">
            <input
              :value="scope.row.freight"
              @blur="setZero(scope.row,'freight')"
              @focus="setEmpty(scope.row,'freight')"
              @input="getEndPrice(scope.row)"
              type="number"
              autocomplete="off"
              class="el-input__inner"
              min="0"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="endPrice" label="单位价,(元/升)"  :render-header="renderHeader" min-width="15%">
      </el-table-column>
    </el-table>
    <div class="tc">
      <el-button type="warning"  class="mt15" @click="sortByEndPriceOnBtn()">按单位价{{orderTitle}}序排列</el-button>
    </div>
    <div class="p15">
      <div class="gray mb15">
        注：请点击输入运费,计算单位价<br>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;柴油：零售0.05≈批发60<br>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;汽油：零售0.05≈批发65</div>
      <span class="mt15 pho"> 联系电话</span><br>
        胡先生:<a href="tel:17823608628" class="phone">17823608628</a><br>
        吕先生:<a href="tel:15826146489" class="phone">15826146489</a>
        <el-button type="primary" class="mt15" @click="toggleDialog">自定义计算</el-button>
      
    </div>
    <el-dialog title="计算单位价" :visible="isVisible" width="80%" :show-close="false" >
      <el-form :model="form" :inline="true">
        <el-form-item label="单价:">
          <el-input v-model.number="form.price" type="number"  @blur="setZero(form,'price')"
              @focus="setEmpty(form,'price')"
              @input="getDialogEndPrice(form)" min="0" autocomplete="off" placeholder="请输入单价"></el-input>
        </el-form-item>
        <el-form-item label="密度:">
          <el-input v-model.number="form.density" type="number"   @blur="setZero(form,'density')"
              @focus="setEmpty(form,'density')"
              @input="getDialogEndPrice(form)" min="0" autocomplete="off" placeholder="请输入密度"></el-input>
        </el-form-item>
        <el-form-item label="运费:">
          <el-input v-model.number="form.freight" type="number"  @blur="setZero(form,'freight')"
              @focus="setEmpty(form,'freight')"
              @input="getDialogEndPrice(form)" min="0" autocomplete="off" placeholder="请输入运费"></el-input>
        </el-form-item>
         <el-form-item label="批发价:">
          <el-input :disabled="true" v-model="form.endPrice" type="number" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="toggleDialog">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import FetchData from '@/axios/index';
import { deep } from "@/assets/js/util";
export default {
  data() {
    return {
      isVisible:false,
      orderTitle:"降",
      form:{
        price:0,
        density:0,
        freight:0,
        endPrice:0
      },
      headerInfo:"",
      tableData: [],
      oldData:[],
      nameList: [],
      sortByEndPrice:[],
      currentTabIndex:0,
    };
  },
  mounted() {
    this.queryList();
    this.queryMessage();
  },
  methods: {
    queryMessage() {
       FetchData.request("message/queryMessage").then((data) => {
        data = data.data;
        if(data.code == "200") {
          this.headerInfo = data.data[0].message;
        }else {
          this.$message.error('头信息查询失败');
        }
      })
    },
    queryList(){
      FetchData.request("price/queryAllPriceOrderByEndPrice").then((data) => {
        data = data.data;
        if(data.code == "200") {
          this.oldData = data.data;
          console.log(this.oldData)
          let nameArr = this.getNameList(data.data);
          this.nameList =  nameArr.sort();
          this.sortByEndPrice = new Array(this.nameList.length).fill("ASC");
          this.getListByName(0);
        }else {
          this.$message.error('查询数据失败');
        }
      })
    },
    getNameList(data) {
      let nameList = data.reduce((nameArr, item) => {
        if (!nameArr.includes(item.name)) {
          nameArr.push(item.name);
        }
        return nameArr;
      }, []);
      return nameList;
    },
    getListByName(index){
      this.currentTabIndex = index;
      this.fillterByName();
    },
    sortByEndPriceOnBtn(){//点击升序降序按钮，重新排列数据
      let sortName = this.sortByEndPrice[this.currentTabIndex];
      if(sortName === "ASC") {
        this.orderTitle = "升",
        this.sortByEndPrice[this.currentTabIndex] = "DESC";
        this.tableData.sort((a,b)=>{ return b.endPrice-a.endPrice})
      }else {
        this.orderTitle = "降",
         this.sortByEndPrice[this.currentTabIndex] = "ASC";
         this.tableData.sort((a,b)=>{ return a.endPrice-b.endPrice})
      }
    },
    sortByEndPriceOnName(){
      let sortName = this.sortByEndPrice[this.currentTabIndex];
      if(sortName === "ASC") {
        this.orderTitle = "降",
        this.tableData.sort((a,b)=>{ return a.endPrice-b.endPrice})
      }else {
        this.orderTitle = "升",
        this.tableData.sort((a,b)=>{ return b.endPrice-a.endPrice})
      }
    },
    fillterByName(){
      let name = this.nameList[this.currentTabIndex];
      let currentData = deep(this.oldData);
      let list = currentData.filter((item) => {
        return item.name == name;
      })
      this.tableData = list;
      this.sortByEndPriceOnName();
    },
    toggleDialog(){
      this.isVisible = !this.isVisible;
    },
    setEmpty(row,props) {
      if(row[props] == "0") {
        row[props] = "";
      }
     
    },
    setZero(row,props) {
      if (row[props] == "") {
        row[props] = 0;
      }
    },
    getEndPrice(row) {
      let value = event.target.value;
      let intValue = value ? parseInt(event.target.value) : 0;
      row.freight = intValue;
      let endPrice = ((row.price + row.freight) / 1000) * row.density;
      row.endPrice = Number(endPrice).toFixed(2);
      this.setOldData(row.id, row.freight, row.endPrice)
    },
    setOldData(id,freight,endPrice){
      this.oldData.forEach((item)=>{
        if(item.id == id) {
          item.freight = freight;
          item.endPrice = endPrice;
        }
      })
    },
    getDialogEndPrice(row) {
      let endPrice = ((row.price + row.freight) / 1000) * row.density;
      row.endPrice = Number(endPrice).toFixed(2);
    },
    renderHeader(h, { column }) {
      let labelArr = column.label.split(",");
      return (
        <span class="render_label">
          <p>{labelArr[0]}</p>
          <p class="small-font">{labelArr[1]}</p>
        </span>
      );
    }
  }
};
</script>


<style lang="scss" >
#wtable {
  
  .pho {
    color: #409EFF
  }
  .header-wrapper {
    background-color: #e2f7ec;
    padding: 5px;
    font-size: 12px;
    >div {
      border: 1px dashed #0c746b;
      padding: 4px;
    }
  }
  .tabs-wrap {
    margin: 10px 0 0 0;
    padding:0 7px;
    overflow: hidden;
    .tabs-item {
          width: 33%;
          float: left;
          margin-bottom: 10px;
         .mtabs {
             padding:0 7px;
           .tab-text {
              height: 40px;
              border:1px solid $theme-three;
              border-radius:4px;
              line-height: 40px;
              text-align: center;
              color: $theme-three;
           }
           .activeTab {
                background-color: $theme-three;
                color: white;
           }
        }
    }
   
  }
  
  .render_label {
    p {
      margin: 0;
    }
  }
  .el-table__row--striped td{
    background-color: $theme-six !important;
  }

   .el-table__row td{
    background-color: $theme-five;
  }
.phone {
  color: $theme-one;
  font-size: 24px;
  margin-left: 10px;
}
  .cell {
    text-align: center;
  }
  table {
    width: 100% !important;
  }
  .el-table th {
    display: table-cell !important;
  }

  .el-table .cell,
  .el-table th div,
  .el-table--border td:first-child .cell,
  .el-table--border th:first-child .cell {
    padding-left: 3px !important;
  }

  .el-table .cell,
  .el-table th div {
    padding-right: 3px !important;
  }
  .el-form--inline .el-form-item {
      display: inline-block;
      vertical-align: top;
      display: flex;
      margin-right: 0;
      justify-content: space-between;
  }
  .el-form--inline .el-form-item__label {
    width: 60px;
    text-align-last: justify;
  }
  .el-dialog__footer {
    text-align: center;
  }
  .el-button--primary {
    width: 100%;
  }
  .el-dialog__header {
      text-align: center;
  }
  .el-dialog__body {
    padding:0 15px;
  }
}
</style>