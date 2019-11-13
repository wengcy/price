<template>
  <div id="wtable" style="width:100%">
    <el-table
      :data="tableData"
      border
      size="small"
      style="width:100%"
      :span-method="arraySpanMethod"
      :row-style="changeCss"
      header-cell-class-name="headerStyle "
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
      <el-table-column label="操作" width="100px" prop="id">
        <template slot-scope="scope">
          <el-link
            class="mr10 font-12"
            size="mini"
            type="primary"
            @click="openUpdateDialog(scope.row)"
          >编辑</el-link>
          <el-link class="font-12" size="mini" type="danger" @click="deletePrice(scope.row)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="p15">
      <el-button type="primary" class="mt15 wper100" @click="openAddDialog">添加</el-button>
    </div>
    <el-dialog :title="title+'油价信息'" :visible="isVisible" width="80%" :show-close="false">
      <el-form :model="form" :inline="true" :rules="rules" ref="form">
        <el-form-item label="供应商:" prop="supplier">
          <el-input v-model="form.supplier" type="text" autocomplete="off" placeholder="请输入供应商"></el-input>
        </el-form-item>
        <el-form-item label="品名:" prop="name">
          <el-input v-model="form.name" type="text" autocomplete="off" placeholder="请输入品名"></el-input>
        </el-form-item>
        <el-form-item label="单价:" prop="price">
          <el-input
            v-model.number="form.price"
            type="number"
            autocomplete="off"
            min="0"
            placeholder="请输入单价"
          ></el-input>
        </el-form-item>
        <el-form-item label="涨跌:" prop="trend">
          <el-select v-model="form.trend" placeholder="请选择幅度">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密度:" prop="density">
          <el-input
            v-model.number="form.density"
            placeholder="请输入密度"
            type="number"
            min="0"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="controlPrice">{{title}}</el-button>
        <el-button @click="toggleDialog">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import FetchData from "@/axios/index";
import { deep } from "@/assets/js/util";
import variables  from "@/assets/css/variables.scss";
export default {
  data() {
    var validateMoney = (rule, value, callback) => {
      let money = /^\d+(\.\d{1,2})?$/;
      if (!money.test(value)) {
        callback(new Error("输入正确的金额"));
      } else {
        callback();
      }
    };
    var validateFloat = (rule, value, callback) => {
      let density = /^(\d*)(\.\d*)?|0$/;
      if (!density.test(value)) {
        callback(new Error("输入正确的密度"));
      } else {
        callback();
      }
    };
    return {
      isVisible: false,
      title: "添加",
      options: [
        {
          value: "涨",
          label: "涨"
        },
        {
          value: "跌",
          label: "跌"
        },
        {
          value: "平",
          label: "平"
        }
      ],
      form: {
        supplier: "",
        name: "",
        price: "",
        trend: "",
        density: "",
        id: ""
      },
      rules: {
        supplier: [
          { required: true, message: "请输入供应商", trigger: "change" }
        ],
        name: [{ required: true, message: "请输入品名", trigger: "change" }],
        trend: [{ required: true, message: "请选择幅度", trigger: "change" }],
        price: [
          { required: true, message: "请输入价格", trigger: "change" },
          { validator: validateMoney, trigger: "change" }
        ],
        density: [
          { required: true, message: "请输入密度", trigger: "change" },
          { validator: validateFloat, trigger: "change" }
        ]
      },
      mergeSpanArr: [], // 空数组，记录每一行的合并数
      mergeSpanArrIndex: "", // mergeSpanArr的索引
      oddSupplierArr: [],
      evenSupplierArr: [],
      tableData: []
    };
  },
  mounted() {
    this.queryPrice();
    console.log(variables)
  },
  methods: {
    queryPrice() {
      FetchData.request("price/queryPrice").then(data => {
        data = data.data;
        if (data.code == "200") {
          this.tableData = data.data;
          this.setMergeArr(this.tableData);
          this.getSupplier(this.tableData);
        } else {
          this.$message.error("查询数据失败");
        }
      });
    },
    controlPrice() {
      let url = "";
      if (this.title == "添加") {
        url = "addPrice";
      } else if (this.title == "修改") {
        url = "updatePrice";
      }
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.requestPrice(url, this.title);
        } else {
          return false;
        }
      });
    },
    requestPrice(url, title) {
      FetchData.request(`price/${url}`, this.form, "post").then(data => {
        data = data.data;
        console.log(data);
        if (data.code == "200") {
          this.$message({
            message: `${title}数据成功`,
            type: "success"
          });
          this.queryPrice();
          this.isVisible = false;
        } else {
          this.$message.error(`${title}数据失败`);
        }
      });
    },
    openAddDialog() {
      this.isVisible = !this.isVisible;
      this.form = {
        supplier: "",
        name: "",
        price: "",
        trend: "",
        density: "",
        id: ""
      };
      this.title = "添加";
      this.$nextTick(() => {
        this.$refs["form"].resetFields();
      });
    },
    openUpdateDialog(row) {
      this.isVisible = !this.isVisible;
      console.log(row);
      let cloneRow = deep(row);
      this.title = "修改";
      this.$nextTick(() => {
        this.$refs["form"].resetFields();
        this.form = cloneRow;
      });
    },

    toggleDialog() {
      this.isVisible = !this.isVisible;
    },
    deletePrice(row) {
      this.form.id = row.id;
      this.$confirm("你确定要删除该条记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        showClose: false
      })
        .then(() => {
          this.requestPrice("deletePrice", "删除");
        })
        .catch(() => {});
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
    changeCss({ row }) {
      // 定义changeCss函数，这样当表格中的相应行满足自己设定的条件是就可以将该行css样式改变
      if (this.oddSupplierArr.includes(row.supplier)) {
        return "background:"+variables.trOddColor;
      } else if (this.evenSupplierArr.includes(row.supplier)) {
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
    width: 80px;
    text-align-last: justify;
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