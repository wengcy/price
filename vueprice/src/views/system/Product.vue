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
      <el-table-column prop="name" label="产品名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="tel" label="联系电话"></el-table-column>
      <el-table-column label="操作" width="100px" prop="id">
        <template slot-scope="scope">
          <el-link
            class="mr10 font-12"
            size="mini"
            type="primary"
            @click="openUpdateDialog(scope.row)"
          >编辑</el-link>
          <el-link class="font-12" size="mini" type="danger" @click="deleteProduct(scope.row)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="p15">
      <el-button type="primary" class="mt15 wper100" @click="openAddDialog">添加</el-button>
    </div>
    <el-dialog :title="title+'产品信息'" :visible="isVisible" width="80%" :show-close="false">
      <el-form :model="form" :inline="true" :rules="rules" ref="form">
        <el-form-item label="名称:" prop="name">
          <el-input v-model="form.name" type="text" autocomplete="off" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="价格:" prop="price">
          <el-input v-model="form.price" type="text" autocomplete="off" placeholder="请输入价格"></el-input>
        </el-form-item>
         <el-form-item label="联系电话:" prop="tel">
          <el-input v-model="form.tel" type="text" autocomplete="off" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item label="图片:" prop="picture">
          <van-uploader
            :max-size="size"
            name="picture"
            :after-read="afterRead"
            :max-count="1"
            :before-read="beforeRead"
            v-model="fileList"
          />
        </el-form-item>
        <el-form-item label="详情:" prop="detail">
          <van-uploader
            :max-size="size"
            name="detail"
            @delete="deleteFile"
            :after-read="afterRead"
            :before-read="beforeRead"
            v-model="detailFileList"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="controlProduct">{{title}}</el-button>
        <el-button @click="toggleDialog">关闭</el-button>
      </div>
    </el-dialog>
    <div class="van-toast van-toast--middle van-toast--loading" :style="{ display:isShowLoading}">
      <div class="van-loading van-loading--spinner van-toast__loading">
        <span class="van-loading__spinner van-loading__spinner--spinner">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
      <div class="van-toast__text">{{messsage}}</div>
    </div>
  </div>
</template>
<script>
import FetchData from "@/axios/index";
import { deep } from "@/assets/js/util";
import variables from "@/assets/css/variables.scss";
import config from "@/config/index";

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
      size: 2097162, //2M
      isVisible: false,
      messsage: "",
      isShowLoading: "none",
      title: "添加",
      fileList: [],
      detailFileList: [],
      form: {
        name: "",
        price: "",
        picture: "",
        detail: [],
        tel:""
      },
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "change" }],
        price: [{ required: true, message: "请输入价格", trigger: "change" }],
        tel: [{ required: true, message: "请输入联系电话", trigger: "change" },
              {validator: validateTel, trigger: "change"}
        ]
      },
      mergeSpanArr: [], // 空数组，记录每一行的合并数
      mergeSpanArrIndex: "", // mergeSpanArr的索引
      oddNameArr: [],
      evenNameArr: [],
      tableData: []
    };
  },
  mounted() {
    this.queryProduct();
  },
  methods: {
    beforeRead(file) {
      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/jpg"
      ) {
        this.$message.error("请上传jpeg、png、jpg图片");
        return false;
      }
      if (file.size > this.size) {
        this.$message.error("图片大小不能超过2M");
        return false;
      }
      return true;
    },
    afterRead(file, name) {
      // 此时可以自行将文件上传至服务器
      this.uploadImg(file, name);
    },
    deleteFile(file) {
      debugger;
      let list = this.form.detail;
      let name = "";
      for (let i = 0; i < list.length; i++) {
        if (file.hasOwnProperty("url")) {
          name = file.url;
          if (name.indexOf(list[i]) > -1) {
            list.splice(i, 1);
          }
        } else {
          name = file.file.name;
          if (list[i].indexOf(name) >-1) {
            list.splice(i, 1);
          }
        }
      }

    },
    uploadImg(file, name) {
      this.messsage = "上传图片中";
      this.isShowLoading = "block";
      FetchData.requestPost(
        `upload`,
        { file: file.content, fileName: Date.now() + "-" + file.file.name },
        "post"
      ).then(data => {
        data = data.data;
        if (data.code == "200") {
          if (name.name == "picture") {
            this.form.picture = data.url;
          } else {
            this.form.detail.push(data.url);
          }
          this.isShowLoading = "none";
        } else {
          this.$message.error("上传图片错误");
        }
      });
    },
    queryProduct() {
      FetchData.request("product/queryProduct").then(data => {
        data = data.data;
        if (data.code == "200") {
          this.tableData = data.data;
          this.setMergeArr(this.tableData);
          this.getName(this.tableData);
        } else {
          this.$message.error("查询数据失败");
        }
      });
    },
    controlProduct() {
      let url = "";
      if (this.title == "添加") {
        url = "addProduct";
      } else if (this.title == "修改") {
        url = "updateProduct";
      }
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.requestProduct(url, this.title);
        } else {
          return false;
        }
      });
    },
    requestProduct(url, title) {
      this.messsage = "请求中";
      this.isShowLoading = "block";
      if (this.form.detail.length > 0 ) {
        this.form.detail = this.form.detail.join(",");
      }
      FetchData.requestPost(`product/${url}`, this.form, "post").then(data => {
        data = data.data;
        this.isShowLoading = "none";
        if (data.code == "200") {
          this.$message({
            message: `${title}数据成功`,
            type: "success"
          });
          this.queryProduct();
          this.isVisible = false;
        } else {
          this.$message.error("查询数据失败");
        }
      });
    },
    openAddDialog() {
      this.isVisible = !this.isVisible;
      this.form = {
        name: "",
        price: "",
        picture: "",
        detail: [],
        tel: ""
      };
      this.fileList = [];
      this.detailFileList = [];
      this.title = "添加";
      this.$nextTick(() => {
        this.$refs["form"].resetFields();
      });
    },
    openUpdateDialog(row) {
      this.isVisible = !this.isVisible;
      let cloneRow = deep(row);
      this.title = "修改";
      this.$nextTick(() => {
        this.$refs["form"].resetFields();
        this.form = Object.assign({}, this.form, cloneRow);
        this.fileList = [];
        this.detailFileList = [];
        let url =
          process.env.NODE_ENV === "development"
            ? config.baseUrl.dev
            : config.baseUrl.pro;
        this.fileList.push({ url: url + this.form.picture });
        if (this.form.detail.length > 0) {
          this.form.detail = this.form.detail.split(',');
          for (let i = 0; i < this.form.detail.length; i++) {
            this.detailFileList.push({ url: url + this.form.detail[i] });
          }
        }else{
          this.form.detail = [];
        }
      });
    },
    toggleDialog() {
      this.isVisible = !this.isVisible;
    },
    deleteProduct(row) {
      this.form.id = row.id;
      this.$confirm("你确定要删除该条记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        showClose: false
      })
        .then(() => {
          this.requestProduct("deleteProduct", "删除");
        })
        .catch(() => {});
    },
    getName(data) {
      let name = data.reduce((nameArr, item) => {
        if (!nameArr.includes(item.name)) {
          nameArr.push(item.name);
        }
        return nameArr;
      }, []);
      name.forEach((element, index) => {
        if (index % 2) {
          this.oddNameArr.push(element);
        } else {
          this.evenNameArr.push(element);
        }
      });
    },
    changeCss({ row }) {
      // 定义changeCss函数，这样当表格中的相应行满足自己设定的条件是就可以将该行css样式改变
      if (this.oddNameArr.includes(row.name)) {
        return "background:" + variables.trOddColor;
      } else if (this.evenNameArr.includes(row.name)) {
        return "background:" + variables.trEvenColor;
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
          if (data[i].name === data[i - 1].name) {
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
  .van-image {
    margin-bottom: 10px;
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
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 100%;
  }
  .el-icon-time:before {
    content: "";
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
    flex: 1;
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