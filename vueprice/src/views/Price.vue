<template>
  <div id="wtable" style="width:100%">
    <el-table
      :data="tableData"
      border
      size="small"
      style="width:100%"
      :span-method="arraySpanMethod"
      :row-style="changeCss"
      header-cell-class-name = "headerStyle "
    >
      <el-table-column prop="supplier" label="供应商"></el-table-column>
      <el-table-column prop="name" label="品名"></el-table-column>
      <el-table-column prop="price" label="单价,(元/吨)" :render-header="renderHeader">
        <template slot-scope="scope">
          {{scope.row.price}}
          <span v-if="scope.row.trend =='涨'" class="blue">↑</span>
          <span v-else-if="scope.row.trend =='跌'" class="red">↓</span>
        </template>
      </el-table-column>
      <el-table-column prop="density" label="密度"></el-table-column>
      <el-table-column label="运费,(元)" prop="freight" :render-header="renderHeader" width="80px">
        <template slot-scope="scope">
          <div class="el-input el-input--mini">
            <input
              :value="scope.row.freight"
              @blur="setZero(scope.row,'freight')"
              @focus="setEmpty(scope.row,'freight')"
              @input="getEndPrice(scope)"
              type="number"
              autocomplete="off"
              class="el-input__inner"
              min="0"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="endPrice" label="单位价,(元/升)" :render-header="renderHeader">
        <template
          slot-scope="scope"
        >{{(scope.row.price+scope.row.freight)/1000*scope.row.density | keepTwoNum}}</template>
      </el-table-column>
    </el-table>
    <div class="p15">
      <div class="gray mb15">注：请点击输入运费,计算单位价</div>
      <span class="mt15">
        联系电话:</span>
        <a href="tel:13436143385" class="phone">13436143385</a>
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
         <el-form-item label="单位价:">
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
import variables  from "@/assets/css/variables.scss";
export default {
  data() {
    return {
      isVisible:false,
      form:{
        price:0,
        density:0,
        freight:0,
        endPrice:0
      },
      mergeSpanArr: [], // 空数组，记录每一行的合并数
      mergeSpanArrIndex: "", // mergeSpanArr的索引
      oddSupplierArr: [],
      evenSupplierArr: [],
      tableData: []
    };
  },
  mounted() {
    FetchData.request("price/queryPrice").then((data) => {
      data = data.data;
      if(data.code == "200") {
        this.tableData = data.data;
        this.setMergeArr(this.tableData);
        this.getSupplier(this.tableData);
      }else {
        this.$message.error('查询数据失败');
      }
    })
  },
  methods: {
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
    getEndPrice(scope) {
      let index = scope.$index;
      let rowNum = this.mergeSpanArr[index];
      //截取数组长度[index-(index+rowNum)）
      let endIndex = index+rowNum;
      let value = event.target.value;
      let intValue = value ? parseInt(event.target.value) : 0;
      this.tableData.forEach((item,i)=>{
        if(i >= index  && i < endIndex) {
          item.freight = intValue;
        }
      })
    },
     getDialogEndPrice(row) {
      let endPrice = ((row.price + row.freight) / 1000) * row.density;
      row.endPrice = Number(endPrice).toFixed(2);
    },
   
    getSupplier(data) {
      let supplier = data.reduce((supplierArr, item) => {
        if (!supplierArr.includes(item.supplier)) {
          supplierArr.push(item.supplier);
        }
        return supplierArr;
      }, []);
      supplier.forEach((element, index) => {
        if (index % 2) {
          this.oddSupplierArr.push(element);
        } else {
          this.evenSupplierArr.push(element);
        }
      });
    },
    changeCss({ row}) {
      // 定义changeCss函数，这样当表格中的相应行满足自己设定的条件是就可以将该行css样式改变
      if (this.oddSupplierArr.includes(row.supplier)) {
        return "background:"+variables.trOddColor;;
      } else if (this.evenSupplierArr.includes(row.supplier)) {
        return "background:"+variables.trEvenColor;;
      }
    },

    renderHeader(h, { column }) {
      let labelArr = column.label.split(",");
      return (
        <span class="render_label">
          <p>{labelArr[0]}</p>
          <p class="small-font">{labelArr[1]}</p>
        </span>
      );
    },
    arraySpanMethod({ rowIndex,columnIndex }) {
      if (columnIndex === 0 || columnIndex === 4) {
        const _row = this.mergeSpanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    },
    setMergeArr(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.mergeSpanArr.push(1);
          this.mergeSpanArrIndex = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].supplier === data[i - 1].supplier) {
            this.mergeSpanArr[this.mergeSpanArrIndex] += 1;
            this.mergeSpanArr.push(0);
          } else {
            this.mergeSpanArr.push(1);
            this.mergeSpanArrIndex = i;
          }
        }
      }
      // 如果第一条记录索引为0，向数组中push 1，设置索引值
      // 如果不是第一条记录，判断与前一条记录是否相等，相等则向mergeSpanArr添加元素0
      // 且将前一条记录+1，即需要合并的行数+1，直到得到所有需要合并的行数
    }
  }
};
</script>


<style lang="scss" >
#wtable {
  .render_label {
    p {
      margin: 0;
    }
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

  .el-table colgroup {
    display: table-cell !important;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: inherit !important;
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
  .el-input__inner {
    padding: 5px !important;
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