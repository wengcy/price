<template>
  <div id="ctable" style="width:100%" v-wechat-title="$route.meta.title">
    <el-table
      :data="tableData"
      border
      size="small"
      style="width:100%"
      :span-method="arraySpanMethod"
      :row-style="changeCss"
      header-cell-class-name="headerStyle "
    >
      <el-table-column prop="district" label="区域"></el-table-column>
      <el-table-column prop="carType" label="车型"></el-table-column>
      <el-table-column prop="carNo" label="车牌号"></el-table-column>
      <el-table-column prop="loadWeight" label="载重,(吨)" :render-header="renderHeader"></el-table-column>
      <el-table-column label="操作" width="100px" prop="id">
        <template slot-scope="scope">
          <el-link
            class="mr10 font-12"
            size="mini"
            type="primary"
            @click="openUpdateDialog(scope.row)"
          >编辑</el-link>
          <el-link class="font-12" size="mini" type="danger" @click="deleteCar(scope.row)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="p15">
      <el-button type="primary" class="mt15 wper100" @click="openAddDialog">添加</el-button>
    </div>
    <el-dialog :title="title+'车信息'" :visible="isVisible" width="80%" :show-close="false">
      <el-form :model="form" :inline="true" :rules="rules" ref="form">
        <el-form-item label="区域:" prop="district">
             <el-input v-model="form.district" type="text" autocomplete="off" placeholder="请输入区域"></el-input>
        </el-form-item>
        <el-form-item label="车型:" prop="carType">
             <el-input v-model="form.carType" type="text" autocomplete="off" placeholder="请输入车型"></el-input>
        </el-form-item>
        <el-form-item label="车牌号:" prop="carNo">
          <el-input v-model="form.carNo" type="text" autocomplete="off" placeholder="请输入车牌号"></el-input>
        </el-form-item>
        <el-form-item label="载重:" prop="loadWeight">
          <el-input v-model="form.loadWeight" type="text" autocomplete="off" placeholder="请输入载重(单位吨)"></el-input>
        </el-form-item>
        <el-form-item label="介质:" prop="media">
           <el-select v-model="form.media" placeholder="请选择介质">
            <el-option
              v-for="item in mediaList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="电话:" prop="tel">
          <el-input v-model="form.tel" type="number" autocomplete="off" placeholder="请输入联系电话"></el-input>
        </el-form-item>
         <el-form-item label="开始时间:" prop="startTime">
            <el-date-picker
              v-model="form.startTime"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="请选择开始时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="期限:" prop="limitDays">
           <el-select v-model="form.limitDays" placeholder="请选择期限">
            <el-option
              v-for="item in limitDaysList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="图片:" prop="picture">
            <van-uploader :after-read="afterRead" :max-count="1" :before-read="beforeRead" v-model="form.fileList"/>
         </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="controlCar">{{title}}</el-button>
        <el-button @click="toggleDialog">关闭</el-button>
      </div>
    </el-dialog>
      <div class="van-toast van-toast--middle van-toast--loading" :style="{ display:isShowLoading}">
        <div class="van-loading van-loading--spinner van-toast__loading">
          <span class="van-loading__spinner van-loading__spinner--spinner">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </span>
        </div>
        <div class="van-toast__text">
          {{messsage}}
        </div>
      </div>
  </div>
</template>
<script>
import FetchData from "@/axios/index";
import { deep } from "@/assets/js/util";
import variables  from "@/assets/css/variables.scss";

const path = require('path');

export default {
   
  data() {
    var validateTel = (rule, value, callback) => {
      let money = /^\d{11}$/;
      if (!money.test(value)) {
        callback(new Error("输入正确的电话"));
      } else {
        callback();
      }
    };
    return {
      isVisible: false,
      messsage:"",
      isShowLoading:"none",
      title: "添加",
      districtList:[],
      carTypeList:[],
      limitDaysList:[{
          value: "一月",
          label: "一月"
        }],
      mediaList: [
        {
          value: "汽油",
          label: "汽油"
        },
        {
          value: "柴油",
          label: "柴油"
        }
      ],
      form: {
        district: "",
        carType: "",
        carNo: "",
        loadWeight: "",
        tel: "",
        media: "",
        picture:"",
        id: "",
        startTime:"",
        limitDays:"",
        fileList:[],
      },
      rules: {
        district: [{ required: true, message: "请输入区域", trigger: "change" }],
        carType: [{ required: true, message: "请输入车型", trigger: "change" }],
        carNo: [{ required: true, message: "请输入车牌号", trigger: "change" }],
        loadWeight: [{ required: true, message: "请输入载重", trigger: "change" }],
        tel: [{ required: true, message: "请输入联系电话", trigger: "change" },
              {validator: validateTel, trigger: "change"}
        ],
        media: [{ required: true, message: "请选择介质", trigger: "change" }],
        startTime: [{ required: true, message: "请选择开始时间", trigger: "change" }],
        limitDays: [{ required: true, message: "请选择期限", trigger: "change" }]
      },
      mergeSpanArr: [], // 空数组，记录每一行的合并数
      mergeSpanArrIndex: "", // mergeSpanArr的索引
      oddDistrictArr: [],
      evenDistrictArr: [],
      tableData: []
    };
  },
  mounted() {
    this.queryCar();
    
  },
  methods: {
    beforeRead(file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
        this.$message.error("请上传jpeg、png、jpg图片");
        return false;
      }
      return true;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.uploadImg(file)
    },
   
    uploadImg(file){
         this.messsage = "上传图片中";
         this.isShowLoading = "block";
         FetchData.requestPost(`upload`, {file: file.content,fileName:Date.now()+"-"+file.file.name}, "post").then(data => {
            data = data.data;
            if (data.code == "200") {
              console.log(data.url);
              this.form.picture = data.url;
               this.isShowLoading = "none";
            } else {
            
            }
        });
    },
    queryCar() {
      FetchData.request("car/queryCar").then(data => {
        data = data.data;
        if (data.code == "200") {
          this.tableData = data.data;
          this.setMergeArr(this.tableData);
          this.getDistrict(this.tableData);
        } else {
          this.$message.error("查询数据失败");
        }
      });
    },
    controlCar() {
      let url = "";
      if (this.title == "添加") {
        url = "addCar";
      } else if (this.title == "修改") {
        url = "updateCar";
      }
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.requestCar(url, this.title);
        } else {
          return false;
        }
      });
    },
    requestCar(url, title) {
        this.messsage = "请求中";
        this.isShowLoading = "block";
        console.log(this.form)
      FetchData.requestPost(`car/${url}`, this.form, "post").then(data => {
        data = data.data;
         this.isShowLoading = "none";
        if (data.code == "200") {
          this.$message({
            message: `${title}数据成功`,
            type: "success"
          });
          this.queryCar();
          this.isVisible = false;
        } else {
         
        }
      });
    },
    openAddDialog() {
      this.isVisible = !this.isVisible;
      this.form = {
         district: "",
        carType: "",
        carNo: "",
        loadWeight: "",
        tel: "",
        media: "",
        picture:"",
        startTime:"",
        limitDays:"",
        fileList:[],
        id: ""
      };
      this.title = "添加";
      this.$nextTick(() => {
        this.$refs["form"].resetFields();
      });
    },
    openUpdateDialog(row) {
      this.isVisible = !this.isVisible;
      let cloneRow = deep(row);
      this.title = "修改";
      console.log(cloneRow)
      this.$nextTick(() => {
        this.$refs["form"].resetFields();
        this.form = Object.assign({},this.form,cloneRow);
        this.form.fileList = [];
        this.form.fileList.push({url:"http://192.144.184.96:80/"+this.form.picture});
      });
    },
    toggleDialog() {
      this.isVisible = !this.isVisible;
    },
    deleteCar(row) {
      this.form.id = row.id;

      this.$confirm("你确定要删除该条记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        showClose: false
      })
        .then(() => {
          this.requestCar("deleteCar", "删除");
        })
        .catch(() => {});
    },
    getDistrict(data) {
      let district = data.reduce((districtArr, item) => {
        if (!districtArr.includes(item.district)) {
          districtArr.push(item.district);
        }
        return districtArr;
      }, []);
      district.forEach((element, index) => {
        if (index % 2) {
          this.oddDistrictArr.push(element);
        } else {
          this.evenDistrictArr.push(element);
        }
      });
    },
    changeCss({ row }) {
      // 定义changeCss函数，这样当表格中的相应行满足自己设定的条件是就可以将该行css样式改变
      if (this.oddDistrictArr.includes(row.district)) {
        return "background:"+variables.trOddColor;
      } else if (this.evenDistrictArr.includes(row.district)) {
        return "background:"+variables.trEvenColor;
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
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.mergeSpanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    },
    setMergeArr(data) {
      this.mergeSpanArr = [];
      this.mergeSpanArrIndex = "";
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.mergeSpanArr.push(1);
          this.mergeSpanArrIndex = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].district === data[i - 1].district) {
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
#ctable {
  .el-dialog {
    margin-top: 5vh !important;
  }
  .render_label {
    p {
      margin: 0;
    }
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
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width:100%;
  }
  .el-icon-time:before {
    content:"";
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
  .el-form--inline .el-form-item {
    display: inline-block;
    vertical-align: top;
    display: flex;
    margin-right: 0;
    //justify-content: space-between;
  }
  .el-form--inline .el-form-item__label {
    width: 90px;
    text-align-last: justify;
  }
  .el-form-item__content {
    flex:1;
  }
  .el-select {
    width: 100%;
  }
  .el-dialog__footer {
    text-align: center;
  }
  .el-button--primary {
    width: auto !important;
  }
  .el-dialog__header {
    text-align: center;
  }
  .el-dialog__body {
    padding: 0 15px;
  }
  .wper100 {
    width: 100% !important;
  }
 
}
</style>