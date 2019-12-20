(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73714a90"],{"18cc":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"#ctable .render_label p{margin:0}#ctable .cell{text-align:center}#ctable table{width:100%!important}#ctable .el-table colgroup,#ctable .el-table th{display:table-cell!important}#ctable .el-table--enable-row-hover .el-table__body tr:hover>td{background-color:inherit!important}#ctable .el-table--border td:first-child .cell,#ctable .el-table--border th:first-child .cell,#ctable .el-table .cell,#ctable .el-table th div{padding-left:3px!important}#ctable .el-table .cell,#ctable .el-table th div{padding-right:3px!important}#ctable .el-form--inline .el-form-item{display:inline-block;vertical-align:top;display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:0;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}#ctable .el-form--inline .el-form-item__label{width:80px;-moz-text-align-last:justify;text-align-last:justify}#ctable .el-dialog__footer{text-align:center}#ctable .el-button--primary{width:auto!important}#ctable .el-dialog__header{text-align:center}#ctable .el-dialog__body{padding:0 15px}#ctable .wper100{width:100%!important}",""]),t.locals={trOddColor:"#c3cdd6",trEvenColor:"#ead0b3"}},"3f3f":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}],staticStyle:{width:"100%"},attrs:{id:"ctable"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",size:"small","span-method":e.arraySpanMethod,"row-style":e.changeCss,"header-cell-class-name":"headerStyle "}},[r("el-table-column",{attrs:{prop:"supplier",label:"供应商"}}),r("el-table-column",{attrs:{prop:"name",label:"品名"}}),r("el-table-column",{attrs:{prop:"price",label:"单价,(元/吨)","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.price)+"\n        "),"涨"==t.row.trend?r("span",{staticClass:"blue"},[e._v("↑")]):"跌"==t.row.trend?r("span",{staticClass:"red"},[e._v("↓")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"density",label:"密度"}}),r("el-table-column",{attrs:{label:"操作",width:"100px",prop:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{staticClass:"mr10 font-12",attrs:{size:"mini",type:"primary"},on:{click:function(r){return e.openUpdateDialog(t.row)}}},[e._v("编辑")]),r("el-link",{staticClass:"font-12",attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.deletePrice(t.row)}}},[e._v("删除")])]}}])})],1),r("div",{staticClass:"p15"},[r("el-button",{staticClass:"mt15 wper100",attrs:{type:"primary"},on:{click:e.openAddDialog}},[e._v("添加")])],1),r("el-dialog",{attrs:{title:e.title+"油价信息",visible:e.isVisible,width:"80%","show-close":!1}},[r("el-form",{ref:"form",attrs:{model:e.form,inline:!0,rules:e.rules}},[r("el-form-item",{attrs:{label:"供应商:",prop:"supplier"}},[r("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入供应商"},model:{value:e.form.supplier,callback:function(t){e.$set(e.form,"supplier",t)},expression:"form.supplier"}})],1),r("el-form-item",{attrs:{label:"品名:",prop:"name"}},[r("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入品名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"单价:",prop:"price"}},[r("el-input",{attrs:{type:"number",autocomplete:"off",min:"0",placeholder:"请输入单价"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"涨跌:",prop:"trend"}},[r("el-select",{attrs:{placeholder:"请选择幅度"},model:{value:e.form.trend,callback:function(t){e.$set(e.form,"trend",t)},expression:"form.trend"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"密度:",prop:"density"}},[r("el-input",{attrs:{placeholder:"请输入密度",type:"number",min:"0",autocomplete:"off"},model:{value:e.form.density,callback:function(t){e.$set(e.form,"density",e._n(t))},expression:"form.density"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.controlPrice}},[e._v(e._s(e.title))]),r("el-button",{on:{click:e.toggleDialog}},[e._v("关闭")])],1)],1)],1)},i=[],a=(r("28a5"),r("ac6a"),r("6762"),r("2fdb"),r("eeb9")),n=r("bbd5"),o=r("8c1f"),s=r.n(o),c={data:function(){var e=function(e,t,r){var l=/^\d+(\.\d{1,2})?$/;l.test(t)?r():r(new Error("输入正确的金额"))},t=function(e,t,r){var l=/^(\d*)(\.\d*)?|0$/;l.test(t)?r():r(new Error("输入正确的密度"))};return{isVisible:!1,title:"添加",options:[{value:"涨",label:"涨"},{value:"跌",label:"跌"},{value:"平",label:"平"}],form:{supplier:"",name:"",price:"",trend:"",density:"",id:""},rules:{supplier:[{required:!0,message:"请输入供应商",trigger:"change"}],name:[{required:!0,message:"请输入品名",trigger:"change"}],trend:[{required:!0,message:"请选择幅度",trigger:"change"}],price:[{required:!0,message:"请输入价格",trigger:"change"},{validator:e,trigger:"change"}],density:[{required:!0,message:"请输入密度",trigger:"change"},{validator:t,trigger:"change"}]},mergeSpanArr:[],mergeSpanArrIndex:"",oddSupplierArr:[],evenSupplierArr:[],tableData:[]}},mounted:function(){this.queryPrice(),console.log(s.a)},methods:{queryPrice:function(){var e=this;a["a"].request("price/queryPrice").then((function(t){t=t.data,"200"==t.code?(e.tableData=t.data,e.setMergeArr(e.tableData),e.getSupplier(e.tableData)):e.$message.error("查询数据失败")}))},controlPrice:function(){var e=this,t="";"添加"==this.title?t="addPrice":"修改"==this.title&&(t="updatePrice"),this.$refs["form"].validate((function(r){if(!r)return!1;e.requestPrice(t,e.title)}))},requestPrice:function(e,t){var r=this;a["a"].request("price/".concat(e),this.form,"post").then((function(e){e=e.data,console.log(e),"200"==e.code?(r.$message({message:"".concat(t,"数据成功"),type:"success"}),r.queryPrice(),r.isVisible=!1):r.$message.error("".concat(t,"数据失败"))}))},openAddDialog:function(){var e=this;this.isVisible=!this.isVisible,this.form={supplier:"",name:"",price:"",trend:"",density:"",id:""},this.title="添加",this.$nextTick((function(){e.$refs["form"].resetFields()}))},openUpdateDialog:function(e){var t=this;this.isVisible=!this.isVisible,console.log(e);var r=Object(n["a"])(e);this.title="修改",this.$nextTick((function(){t.$refs["form"].resetFields(),t.form=r}))},toggleDialog:function(){this.isVisible=!this.isVisible},deletePrice:function(e){var t=this;this.form.id=e.id,this.$confirm("你确定要删除该条记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",showClose:!1}).then((function(){t.requestPrice("deletePrice","删除")})).catch((function(){}))},getSupplier:function(e){var t=this,r=e.reduce((function(e,t){return e.includes(t.supplier)||e.push(t.supplier),e}),[]);r.forEach((function(e,r){r%2?t.oddSupplierArr.push(e):t.evenSupplierArr.push(e)}))},changeCss:function(e){var t=e.row;return this.oddSupplierArr.includes(t.supplier)?"background:"+s.a.trOddColor:this.evenSupplierArr.includes(t.supplier)?"background:"+s.a.trEvenColor:void 0},renderHeader:function(e,t){var r=t.column,l=r.label.split(",");return e("span",{class:"render_label"},[e("p",[l[0]]),e("p",{class:"small-font"},[l[1]])])},arraySpanMethod:function(e){var t=e.rowIndex,r=e.columnIndex;if(0===r){var l=this.mergeSpanArr[t],i=l>0?1:0;return{rowspan:l,colspan:i}}},setMergeArr:function(e){this.mergeSpanArr=[],this.mergeSpanArrIndex="";for(var t=0;t<e.length;t++)0===t?(this.mergeSpanArr.push(1),this.mergeSpanArrIndex=0):e[t].supplier===e[t-1].supplier?(this.mergeSpanArr[this.mergeSpanArrIndex]+=1,this.mergeSpanArr.push(0)):(this.mergeSpanArr.push(1),this.mergeSpanArrIndex=t)}}},p=c,d=(r("ca2d"),r("2877")),u=Object(d["a"])(p,l,i,!1,null,null,null);t["default"]=u.exports},ca2d:function(e,t,r){"use strict";var l=r("d35d"),i=r.n(l);i.a},d35d:function(e,t,r){var l=r("18cc");"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var i=r("499e").default;i("613bc30c",l,!0,{sourceMap:!1,shadowMode:!1})}}]);