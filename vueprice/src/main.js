import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Link,Select, Dialog, Input, Option, Table, TableColumn, Form, FormItem, Message,MessageBox} from 'element-ui';

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
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
