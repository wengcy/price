import Vue from 'vue'
import Router from 'vue-router'
import {getCookie,isUndefined } from '@/assets/js/util'

Vue.use(Router)


let routes = [
    {
      path: '/',
      name: 'price',
      component: () => import('./views/Price.vue'),
      meta:{
        title: '油价'
      }
    },
    {
      path: '/price',
      name: 'controlPrice',
      component: () => import('./views/system/ControlPrice.vue'),
      meta:{
        title: '油价管理',
        needLogin: true
      }
    },
    {
      path: '/system',
      name: 'system',
      component: () => import('./views/system/System.vue'),
      meta:{
        title: '系统管理',
        needLogin: true
      }
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/system/Message.vue'),
      meta:{
        title: '消息管理',
        needLogin: true
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/system/Product.vue'),
      meta:{
        title: '产品管理',
        needLogin: true
      }
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/system/Car.vue'),
      meta:{
        title: '车管理',
        needLogin: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/system/Login.vue'),
      meta:{
        title: '系统登录'
      }
    },
    {
      path: '/postage',
      name: 'postage',
      component: () => import('./views/postage.vue'),
      meta:{
        title: '联系运车'
      }
    },
    {
      path: '/productIndex',
      name: 'productIndex',
      component: () => import('./views/product.vue'),
      meta:{
        title: '商城产品'
      }
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: () => import('./views/productDetail.vue'),
      meta:{
        title: '产品详情'
      }
    }
  ]

  const router = new VueRouter({
    routes 
  })
  
  router.beforeEach((to, from, next) => {
    let token = getCookie('token'); 
    let isLogin = !isUndefined(token);
    if (isLogin) {
      // 如果是登录
      if (to.name === 'login') {
          next({name:'system'})
      } else {
          next();
      }
    }else{
      let flag = to.matched.some(item => item.meta.needLogin);
      if (flag) {
        next('/login');
      } else {
        next();
      }
    }
  });

  export default router;