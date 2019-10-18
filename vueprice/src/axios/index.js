import axios from 'axios';
import config from '@/config/index'
// import that  from '@/main'
// import {getCookie } from '@/assets/js/utils'
// let  loading = {};
class FetchData {
  constructor() {
    this.baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
  }

//   setInterceptor(instance) { // 设置拦截器
//     instance.interceptors.request.use(config => {
//     config.headers.Authorization = `${getCookie('token')}`;// 增加token
// 	loading = that.$loading({
//     lock: true,
//     text: 'Loading',
// 	 spinner: 'el-icon-loading',
// 	  			 background: 'rgba(255, 255, 255, 0.7)'
// 	  		 }); 
//       return config; 
//     }, (err) => {
// 	  that.$message('请求错误');
//       return Promise.reject(err);
//     });

//      instance.interceptors.response.use(function(response){
//          //对响应数据做些事
//     	 loading.close(); 
//          return response.data;
//        },function(error){
//          //请求错误时做些事
//     	  loading.close();
//     	  that.$message('响应错误');
//          return Promise.reject(error);
//        });
//  }

  request(url,params = {},method = 'get',isLoading = false) {
    const instance = axios.create();
    const config = {
     baseURL: this.baseURL,
    timeout: this.timeout,
    method:method,
	url:url,
	params:params,
	isLoading:isLoading
    };
    //this.setInterceptor(instance);
    return instance(config);
  }
}

export default new FetchData();