(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b769ec0"],{"0b96":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'#ctable .el-dialog{margin-top:5vh!important}#ctable .van-image{margin-bottom:10px}#ctable .render_label p{margin:0}#ctable .cell{text-align:center}#ctable table{width:100%!important}#ctable .el-table th{display:table-cell!important}#ctable .el-date-editor.el-input,#ctable .el-date-editor.el-input__inner{width:100%}#ctable .el-icon-time:before{content:""}#ctable .el-table colgroup{display:table-cell!important}#ctable .el-table--enable-row-hover .el-table__body tr:hover>td{background-color:inherit!important}#ctable .el-table--border td:first-child .cell,#ctable .el-table--border th:first-child .cell,#ctable .el-table .cell,#ctable .el-table th div{padding-left:3px!important}#ctable .el-table .cell,#ctable .el-table th div{padding-right:3px!important}#ctable .el-form--inline .el-form-item{display:inline-block;vertical-align:top;display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:0}#ctable .el-form--inline .el-form-item__label{width:90px;-moz-text-align-last:justify;text-align-last:justify}#ctable .el-form-item__content{-webkit-box-flex:1;-ms-flex:1;flex:1}#ctable .el-select{width:100%}#ctable .el-dialog__footer{text-align:center}#ctable .el-button--primary{width:auto!important}#ctable .el-dialog__header{text-align:center}#ctable .el-dialog__body{padding:0 15px}#ctable .wper100{width:100%!important}',""]),t.locals={trOddColor:"#c3cdd6",trEvenColor:"#ead0b3"}},8090:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}],staticStyle:{width:"100%"},attrs:{id:"ctable"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",size:"small","span-method":e.arraySpanMethod,"row-style":e.changeCss,"header-cell-class-name":"headerStyle "}},[a("el-table-column",{attrs:{prop:"name",label:"产品名称"}}),a("el-table-column",{attrs:{prop:"price",label:"价格"}}),a("el-table-column",{attrs:{label:"操作",width:"100px",prop:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{staticClass:"mr10 font-12",attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.openUpdateDialog(t.row)}}},[e._v("编辑")]),a("el-link",{staticClass:"font-12",attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.deleteProduct(t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"p15"},[a("el-button",{staticClass:"mt15 wper100",attrs:{type:"primary"},on:{click:e.openAddDialog}},[e._v("添加")])],1),a("el-dialog",{attrs:{title:e.title+"产品信息",visible:e.isVisible,width:"80%","show-close":!1}},[a("el-form",{ref:"form",attrs:{model:e.form,inline:!0,rules:e.rules}},[a("el-form-item",{attrs:{label:"名称:",prop:"name"}},[a("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"价格:",prop:"price"}},[a("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入价格"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),a("el-form-item",{attrs:{label:"图片:",prop:"picture"}},[a("van-uploader",{attrs:{"max-size":e.size,name:"picture","after-read":e.afterRead,"max-count":1,"before-read":e.beforeRead},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),a("el-form-item",{attrs:{label:"详情:",prop:"detail"}},[a("van-uploader",{attrs:{"max-size":e.size,name:"detail","after-read":e.afterRead,"before-read":e.beforeRead},on:{delete:e.deleteFile},model:{value:e.detailFileList,callback:function(t){e.detailFileList=t},expression:"detailFileList"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.controlProduct}},[e._v(e._s(e.title))]),a("el-button",{on:{click:e.toggleDialog}},[e._v("关闭")])],1)],1),a("div",{staticClass:"van-toast van-toast--middle van-toast--loading",style:{display:e.isShowLoading}},[e._m(0),a("div",{staticClass:"van-toast__text"},[e._v("\n        "+e._s(e.messsage)+"\n      ")])])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"van-loading van-loading--spinner van-toast__loading"},[a("span",{staticClass:"van-loading__spinner van-loading__spinner--spinner"},[a("i"),a("i"),a("i"),a("i"),a("i"),a("i"),a("i"),a("i"),a("i"),a("i"),a("i"),a("i")])])}],l=(a("ac6a"),a("6762"),a("2fdb"),a("7f7f"),a("28a5"),a("eeb9")),n=a("bbd5"),o=a("8c1f"),s=a.n(o),c=a("f121"),d={data:function(){return{size:2097162,isVisible:!1,messsage:"",isShowLoading:"none",title:"添加",fileList:[],detailFileList:[],form:{name:"",price:"",picture:"",detail:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"change"}],price:[{required:!0,message:"请输入价格",trigger:"change"}]},mergeSpanArr:[],mergeSpanArrIndex:"",oddNameArr:[],evenNameArr:[],tableData:[]}},mounted:function(){this.queryProduct()},methods:{beforeRead:function(e){return"image/jpeg"!==e.type&&"image/png"!==e.type&&"image/jpg"!==e.type?(this.$message.error("请上传jpeg、png、jpg图片"),!1):!(e.size>this.size)||(this.$message.error("图片大小不能超过2M"),!1)},afterRead:function(e,t){this.uploadImg(e,t)},deleteFile:function(e){for(var t=this.form.detail.split(","),a=[],i=0;i<t.length;i++)a.push({url:t[i]});for(var r=0;r<a.length;r++)e.url.indexOf(a[r].url)&&a.splice(r,1);for(var l="",n=0;n<a.length;n++)l+=a[n].url+",";this.form.detail=l.substring(0)},uploadImg:function(e,t){var a=this;this.messsage="上传图片中",this.isShowLoading="block",l["a"].requestPost("upload",{file:e.content,fileName:Date.now()+"-"+e.file.name},"post").then((function(e){e=e.data,"200"==e.code?("picture"==t.name?a.form.picture=e.url:a.form.detail+=e.url+",",a.isShowLoading="none"):a.$message.error("上传图片错误")}))},queryProduct:function(){var e=this;l["a"].request("product/queryProduct").then((function(t){t=t.data,"200"==t.code?(e.tableData=t.data,e.setMergeArr(e.tableData),e.getName(e.tableData)):e.$message.error("查询数据失败")}))},controlProduct:function(){var e=this,t="";"添加"==this.title?t="addProduct":"修改"==this.title&&(t="updateProduct"),this.$refs["form"].validate((function(a){if(!a)return!1;e.requestProduct(t,e.title)}))},requestProduct:function(e,t){var a=this;this.messsage="请求中",this.isShowLoading="block",""!=this.form.detail&&(this.form.detail=this.form.detail.substring(0,this.form.detail.length-1)),l["a"].requestPost("product/".concat(e),this.form,"post").then((function(e){e=e.data,a.isShowLoading="none","200"==e.code?(a.$message({message:"".concat(t,"数据成功"),type:"success"}),a.queryProduct(),a.isVisible=!1):a.$message.error("查询数据失败")}))},openAddDialog:function(){var e=this;this.isVisible=!this.isVisible,this.form={name:"",price:"",picture:"",detail:"",tel:""},this.title="添加",this.$nextTick((function(){e.$refs["form"].resetFields()}))},openUpdateDialog:function(e){var t=this;this.isVisible=!this.isVisible;var a=Object(n["a"])(e);this.title="修改",this.$nextTick((function(){t.$refs["form"].resetFields(),t.form=Object.assign({},t.form,a),t.fileList=[],t.detailFileList=[];var e=c["a"].baseUrl.pro;if(t.fileList.push({url:e+t.form.picture}),""!=t.form.detail)for(var i=t.form.detail.split(","),r=0;r<i.length;r++)t.detailFileList.push({url:e+i[r]})}))},toggleDialog:function(){this.isVisible=!this.isVisible},deleteProduct:function(e){var t=this;this.form.id=e.id,this.$confirm("你确定要删除该条记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",showClose:!1}).then((function(){t.requestProduct("deleteProduct","删除")})).catch((function(){}))},getName:function(e){var t=this,a=e.reduce((function(e,t){return e.includes(t.name)||e.push(t.name),e}),[]);a.forEach((function(e,a){a%2?t.oddNameArr.push(e):t.evenNameArr.push(e)}))},changeCss:function(e){var t=e.row;return this.oddNameArr.includes(t.name)?"background:"+s.a.trOddColor:this.evenNameArr.includes(t.name)?"background:"+s.a.trEvenColor:void 0},renderHeader:function(e,t){var a=t.column,i=a.label.split(",");return e("span",{class:"render_label"},[e("p",[i[0]]),e("p",{class:"small-font"},[i[1]])])},arraySpanMethod:function(e){var t=e.rowIndex,a=e.columnIndex;if(0===a){var i=this.mergeSpanArr[t],r=i>0?1:0;return{rowspan:i,colspan:r}}},setMergeArr:function(e){this.mergeSpanArr=[],this.mergeSpanArrIndex="";for(var t=0;t<e.length;t++)0===t?(this.mergeSpanArr.push(1),this.mergeSpanArrIndex=0):e[t].name===e[t-1].name?(this.mergeSpanArr[this.mergeSpanArrIndex]+=1,this.mergeSpanArr.push(0)):(this.mergeSpanArr.push(1),this.mergeSpanArrIndex=t)}}},u=d,p=(a("be8c"),a("2877")),m=Object(p["a"])(u,i,r,!1,null,null,null);t["default"]=m.exports},b8b1:function(e,t,a){var i=a("0b96");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("499e").default;r("3c1cd44c",i,!0,{sourceMap:!1,shadowMode:!1})},be8c:function(e,t,a){"use strict";var i=a("b8b1"),r=a.n(i);r.a}}]);