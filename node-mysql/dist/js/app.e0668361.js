(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-20c934ab":"a4974573","chunk-46d63ae4":"762a240a","chunk-4f0ab34b":"f0c44622","chunk-73714a90":"f1192804","chunk-795cebb0":"80146fd4"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var c=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2ffc":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"body,html{margin:0;padding:0;font-size:15px}body .headerStyle,html .headerStyle{background:#fa7362;color:#fff}body .el-table--small td,body .el-table--small th,html .el-table--small td,html .el-table--small th{padding:1px 0}body .el-form-item,html .el-form-item{margin-bottom:18px}body .nop,html .nop{padding:0}body .el-dialog,body .el-message-box,html .el-dialog,html .el-message-box{width:300px!important}body .wper100,html .wper100{width:100%!important}body .red,html .red{color:#fa7362}body .font-12,html .font-12{font-size:12px}body .gray,html .gray{color:#999}body .mr10,html .mr10{margin-right:10px}body .blue,html .blue{color:#409eff}body .nob,html .nob{border:0}body div,body span,html div,html span{-webkit-box-sizing:content-box;box-sizing:content-box}body .p15,html .p15{padding:15px}body .mb15,html .mb15{margin-bottom:15px}body .mt15,html .mt15{margin-top:15px}body .m15,html .m15{margin:15px}body .mtb15,html .mtb15{margin:15px 0}body .small-font,html .small-font{font-size:12px}body .tc,html .tc{text-align:center}",""]),t.locals={trOddColor:"#c3cdd6",trEvenColor:"#ead0b3"}},"3c2a":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"#wtable .pho{color:#409eff}#wtable .header-wrapper{background-color:#e2f7ec;padding:5px;font-size:12px}#wtable .header-wrapper>div{border:1px dashed #0c746b;padding:4px}#wtable .tabs-wrap{margin:10px 0 0 0;padding:0 7px;overflow:hidden}#wtable .tabs-wrap .tabs-item{width:33%;float:left;margin-bottom:10px}#wtable .tabs-wrap .tabs-item .mtabs{padding:0 7px}#wtable .tabs-wrap .tabs-item .mtabs .tab-text{height:40px;border:1px solid #409eff;border-radius:4px;line-height:40px;text-align:center;color:#409eff}#wtable .tabs-wrap .tabs-item .mtabs .activeTab{background-color:#409eff;color:#fff}#wtable .render_label p{margin:0}#wtable .el-table__row--striped td{background-color:#ead0b3!important}#wtable .el-table__row td{background-color:#c3cdd6}#wtable .phone{color:#fa7362;font-size:24px;margin-left:10px}#wtable .cell{text-align:center}#wtable table{width:100%!important}#wtable .el-table th{display:table-cell!important}#wtable .el-table--border td:first-child .cell,#wtable .el-table--border th:first-child .cell,#wtable .el-table .cell,#wtable .el-table th div{padding-left:3px!important}#wtable .el-table .cell,#wtable .el-table th div{padding-right:3px!important}#wtable .el-input__inner{padding:5px!important}#wtable .el-form--inline .el-form-item{display:inline-block;vertical-align:top;display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:0;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}#wtable .el-form--inline .el-form-item__label{width:60px;-moz-text-align-last:justify;text-align-last:justify}#wtable .el-dialog__footer{text-align:center}#wtable .el-button--primary{width:100%}#wtable .el-dialog__header{text-align:center}#wtable .el-dialog__body{padding:0 15px}",""]),t.locals={trOddColor:"#c3cdd6",trEvenColor:"#ead0b3"}},"3d39":function(e,t,r){var n=r("2ffc");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("499e").default;a("7193928a",n,!0,{sourceMap:!1,shadowMode:!1})},"40ce":function(e,t,r){"use strict";var n=r("9d34"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"keepTwoNum",(function(){return Q}));r("0fb7"),r("450d");var a=r("f529"),o=r.n(a),i=(r("9e1f"),r("6ed5")),l=r.n(i),s=(r("eca7"),r("3787")),c=r.n(s),d=(r("425f"),r("4105")),u=r.n(d),f=(r("5466"),r("ecdf")),b=r.n(f),p=(r("38a0"),r("ad41")),m=r.n(p),h=(r("6611"),r("e772")),g=r.n(h),y=(r("10cb"),r("f3ad")),v=r.n(y),w=(r("a7cc"),r("df33")),x=r.n(w),_=(r("1f1a"),r("4e4b")),P=r.n(_),k=(r("fd71"),r("a447")),E=r.n(k),C=(r("1951"),r("eedf")),O=r.n(C),j=(r("456d"),r("ac6a"),r("e7e5"),r("d399")),T=(r("e930"),r("8f80")),D=(r("9cb7"),r("66fd")),L=(r("bda7"),r("5e46")),B=(r("da3c"),r("0b33")),S=(r("61ae"),r("d314")),M=(r("09d3"),r("2d6d")),N=(r("cadf"),r("551c"),r("f751"),r("097d"),r("8bbf")),I=r.n(N),$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},q=[],z=r("d3be"),A={name:"price",components:{Price:z["default"]}},U=A,R=r("2877"),V=Object(R["a"])(U,$,q,!1,null,null,null),H=V.exports,Z=r("6389"),F=r.n(Z);I.a.use(F.a);var J=new F.a({mode:"hash",routes:[{path:"/",name:"price",component:function(){return Promise.resolve().then(r.bind(null,"d3be"))}},{path:"/price",name:"controlPrice",component:function(){return r.e("chunk-73714a90").then(r.bind(null,"3f3f"))}},{path:"/system",name:"system",component:function(){return r.e("chunk-4f0ab34b").then(r.bind(null,"9826"))}},{path:"/message",name:"message",component:function(){return r.e("chunk-795cebb0").then(r.bind(null,"df59"))}},{path:"/car",name:"car",component:function(){return r.e("chunk-20c934ab").then(r.bind(null,"bd0b"))}},{path:"/postage",name:"postage",component:function(){return r.e("chunk-46d63ae4").then(r.bind(null,"991b"))}}]}),G=r("2f62");I.a.use(G["a"]);var K=new G["a"].Store({state:{},mutations:{},actions:{}});r("3d39"),r("c5f6");function Q(e){return e=Number(e),e.toFixed(2)}I.a.use(M["a"]),I.a.use(S["a"]),I.a.use(B["a"]),I.a.use(L["a"]),I.a.use(D["a"]),I.a.use(T["a"]),I.a.use(j["a"]),I.a.config.productionTip=!1,Object.keys(n).forEach((function(e){I.a.filter(e,n[e])})),I.a.use(O.a),I.a.use(E.a),I.a.use(P.a),I.a.use(x.a),I.a.use(v.a),I.a.use(g.a),I.a.use(m.a),I.a.use(b.a),I.a.use(u.a),I.a.use(c.a),I.a.prototype.$confirm=l.a.confirm,I.a.prototype.$message=o.a,new I.a({router:J,store:K,render:function(e){return e(H)}}).$mount("#app")},6389:function(e,t){e.exports=VueRouter},"8bbf":function(e,t){e.exports=Vue},"8c1f":function(e,t,r){var n=r("e6c2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("499e").default;a("a89f9a24",n,!0,{sourceMap:!1,shadowMode:!1})},"9d34":function(e,t,r){var n=r("3c2a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("499e").default;a("5626e107",n,!0,{sourceMap:!1,shadowMode:!1})},bbd5:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("7618");function a(e){var t=Array.isArray(e)?[]:{};if(e&&"object"===Object(n["a"])(e))for(var r in e)e.hasOwnProperty(r)&&(e[r]&&"object"===Object(n["a"])(e[r])?t[r]=a(e[r]):t[r]=e[r]);return t}},cebe:function(e,t){e.exports=axios},d3be:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{width:"100%"},attrs:{id:"wtable"}},[r("div",{staticClass:"header-wrapper m15"},[r("div",{domProps:{innerHTML:e._s(e.headerInfo)}})]),r("div",{staticClass:"tabs-wrap"},e._l(e.nameList,(function(t,n){return r("div",{key:t,staticClass:"tabs-item",on:{click:function(t){return e.getListByName(n)}}},[r("div",{staticClass:"mtabs"},[r("div",{staticClass:"tab-text",class:e.currentTabIndex==n?"activeTab":""},[e._v("\n              "+e._s(t)+"\n           ")])])])})),0),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"",size:"small","header-cell-class-name":"headerStyle "}},[r("el-table-column",{attrs:{prop:"supplier",label:"供应商","min-width":"30%"}}),r("el-table-column",{attrs:{prop:"name",label:"品名","min-width":"10%"}}),r("el-table-column",{attrs:{prop:"price",label:"单价,(元/吨)","render-header":e.renderHeader,"min-width":"15%"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.price)+"\n        "),"涨"==t.row.trend?r("span",{staticClass:"blue"},[e._v("↑")]):"跌"==t.row.trend?r("span",{staticClass:"red"},[e._v("↓")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"density",label:"密度","min-width":"15%"}}),r("el-table-column",{attrs:{label:"运费,(元)",prop:"freight","render-header":e.renderHeader,"min-width":"15%"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"el-input el-input--mini"},[r("input",{staticClass:"el-input__inner",attrs:{type:"number",autocomplete:"off",min:"0"},domProps:{value:t.row.freight},on:{blur:function(r){return e.setZero(t.row,"freight")},focus:function(r){return e.setEmpty(t.row,"freight")},input:function(r){return e.getEndPrice(t.row)}}})])]}}])}),r("el-table-column",{attrs:{prop:"endPrice",label:"单位价,(元/升)","render-header":e.renderHeader,"min-width":"15%"}})],1),r("div",{staticClass:"tc"},[r("el-button",{staticClass:"mt15",attrs:{type:"warning"},on:{click:function(t){return e.sortByEndPriceOnBtn()}}},[e._v("按单位价"+e._s(e.orderTitle)+"序排列")])],1),r("div",{staticClass:"p15"},[e._m(0),r("span",{staticClass:"mt15 pho"},[e._v(" 联系电话")]),r("br"),e._v("\n      胡先生:"),r("a",{staticClass:"phone",attrs:{href:"tel:13436143385"}},[e._v("13436143385")]),r("br"),e._v("\n      吕先生:"),r("a",{staticClass:"phone",attrs:{href:"tel:18990591010"}},[e._v("18990591010")]),r("el-button",{staticClass:"mt15",attrs:{type:"primary"},on:{click:e.toggleDialog}},[e._v("自定义计算")])],1),r("el-dialog",{attrs:{title:"计算单位价",visible:e.isVisible,width:"80%","show-close":!1}},[r("el-form",{attrs:{model:e.form,inline:!0}},[r("el-form-item",{attrs:{label:"单价:"}},[r("el-input",{attrs:{type:"number",min:"0",autocomplete:"off",placeholder:"请输入单价"},on:{blur:function(t){return e.setZero(e.form,"price")},focus:function(t){return e.setEmpty(e.form,"price")},input:function(t){return e.getDialogEndPrice(e.form)}},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"密度:"}},[r("el-input",{attrs:{type:"number",min:"0",autocomplete:"off",placeholder:"请输入密度"},on:{blur:function(t){return e.setZero(e.form,"density")},focus:function(t){return e.setEmpty(e.form,"density")},input:function(t){return e.getDialogEndPrice(e.form)}},model:{value:e.form.density,callback:function(t){e.$set(e.form,"density",e._n(t))},expression:"form.density"}})],1),r("el-form-item",{attrs:{label:"运费:"}},[r("el-input",{attrs:{type:"number",min:"0",autocomplete:"off",placeholder:"请输入运费"},on:{blur:function(t){return e.setZero(e.form,"freight")},focus:function(t){return e.setEmpty(e.form,"freight")},input:function(t){return e.getDialogEndPrice(e.form)}},model:{value:e.form.freight,callback:function(t){e.$set(e.form,"freight",e._n(t))},expression:"form.freight"}})],1),r("el-form-item",{attrs:{label:"单位价:"}},[r("el-input",{attrs:{disabled:!0,type:"number",autocomplete:"off"},model:{value:e.form.endPrice,callback:function(t){e.$set(e.form,"endPrice",t)},expression:"form.endPrice"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.toggleDialog}},[e._v("关闭")])],1)],1)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gray mb15"},[e._v("\n      注：请点击输入运费,计算单位价"),r("br"),e._v("\n             柴油：零售0.05≈批发60"),r("br"),e._v("\n             汽油：零售0.05≈批发65")])}],o=(r("28a5"),r("ac6a"),r("c5f6"),r("7f7f"),r("6762"),r("2fdb"),r("6c7b"),r("55dd"),r("eeb9")),i=(r("8c1f"),r("bbd5")),l={data:function(){return{isVisible:!1,orderTitle:"降",form:{price:0,density:0,freight:0,endPrice:0},headerInfo:"",tableData:[],oldData:[],nameList:[],sortByEndPrice:[],currentTabIndex:0}},mounted:function(){this.queryList(),this.queryMessage()},methods:{queryMessage:function(){var e=this;o["a"].request("message/queryMessage").then((function(t){t=t.data,"200"==t.code?e.headerInfo=t.data[0].message:e.$message.error("头信息查询失败")}))},queryList:function(){var e=this;o["a"].request("price/queryAllPriceOrderByEndPrice").then((function(t){if(t=t.data,"200"==t.code){e.oldData=t.data,console.log(e.oldData);var r=e.getNameList(t.data);e.nameList=r.sort(),e.sortByEndPrice=new Array(e.nameList.length).fill("ASC"),e.getListByName(0)}else e.$message.error("查询数据失败")}))},getNameList:function(e){var t=e.reduce((function(e,t){return e.includes(t.name)||e.push(t.name),e}),[]);return t},getListByName:function(e){this.currentTabIndex=e,this.fillterByName()},sortByEndPriceOnBtn:function(){var e=this.sortByEndPrice[this.currentTabIndex];"ASC"===e?(this.orderTitle="升",this.sortByEndPrice[this.currentTabIndex]="DESC",this.tableData.sort((function(e,t){return t.endPrice-e.endPrice}))):(this.orderTitle="降",this.sortByEndPrice[this.currentTabIndex]="ASC",this.tableData.sort((function(e,t){return e.endPrice-t.endPrice})))},sortByEndPriceOnName:function(){var e=this.sortByEndPrice[this.currentTabIndex];"ASC"===e?(this.orderTitle="降",this.tableData.sort((function(e,t){return e.endPrice-t.endPrice}))):(this.orderTitle="升",this.tableData.sort((function(e,t){return t.endPrice-e.endPrice})))},fillterByName:function(){var e=this.nameList[this.currentTabIndex],t=Object(i["a"])(this.oldData),r=t.filter((function(t){return t.name==e}));this.tableData=r,this.sortByEndPriceOnName()},toggleDialog:function(){this.isVisible=!this.isVisible},setEmpty:function(e,t){"0"==e[t]&&(e[t]="")},setZero:function(e,t){""==e[t]&&(e[t]=0)},getEndPrice:function(e){var t=event.target.value,r=t?parseInt(event.target.value):0;e.freight=r;var n=(e.price+e.freight)/1e3*e.density;e.endPrice=Number(n).toFixed(2),this.setOldData(e.id,e.freight,e.endPrice)},setOldData:function(e,t,r){this.oldData.forEach((function(n){n.id==e&&(n.freight=t,n.endPrice=r)}))},getDialogEndPrice:function(e){var t=(e.price+e.freight)/1e3*e.density;e.endPrice=Number(t).toFixed(2)},renderHeader:function(e,t){var r=t.column,n=r.label.split(",");return e("span",{class:"render_label"},[e("p",[n[0]]),e("p",{class:"small-font"},[n[1]])])}}},s=l,c=(r("40ce"),r("2877")),d=Object(c["a"])(s,n,a,!1,null,null,null);t["default"]=d.exports},e6c2:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"",""]),t.locals={trOddColor:"#c3cdd6",trEvenColor:"#ead0b3"}},eeb9:function(e,t,r){"use strict";var n=r("d225"),a=r("b0b4"),o=r("cebe"),i=r.n(o),l={baseUrl:{dev:"http://172.16.100.87:80/",pro:"http://172.16.100.87:80/"}},s=function(){function e(){Object(n["a"])(this,e),this.baseURL=l.baseUrl.pro}return Object(a["a"])(e,[{key:"request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=i.a.create(),o={baseURL:this.baseURL,timeout:this.timeout,method:r,url:e,params:t,isLoading:n};return console.log(o),a(o)}},{key:"requestPost",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=i.a.create(),o={baseURL:this.baseURL,timeout:this.timeout,method:r,url:e,data:t,isLoading:n};return a(o)}}]),e}();t["a"]=new s}});