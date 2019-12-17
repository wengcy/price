import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
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
        title: '油价管理'
      }
    },
    {
      path: '/system',
      name: 'system',
      component: () => import('./views/system/System.vue'),
      meta:{
        title: '系统管理'
      }
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/system/Message.vue'),
      meta:{
        title: '消息管理'
      }
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/system/Car.vue'),
      meta:{
        title: '车管理'
      }
    },
    {
      path: '/postage',
      name: 'postage',
      component: () => import('./views/postage.vue'),
      meta:{
        title: '联系运车'
      }
    }
  ]
})

