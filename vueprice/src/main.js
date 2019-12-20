import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

import { 
  Button, 
  Link,Select, 
  Dialog, Input, 
  Option, Table, 
  TableColumn, 
  Form, FormItem, 
  Message,
  MessageBox,
  DatePicker
} from 'element-ui';

import { 
  DropdownMenu,
  DropdownItem,
  Tab,
  Tabs,
  Card ,
  Uploader,
  Toast,
  Field 
 
} from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Card );
Vue.use(Uploader);
Vue.use(Toast);
Vue.use(Field)



import '@/assets/css/common.scss'
import * as filters from './filters'
Vue.config.productionTip = false

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})

Vue.use(Button);
Vue.use(Link);
Vue.use(Select);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(DatePicker);

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
