import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'price',
      component: () => import('./views/Price.vue')
    },
    {
      path: '/price',
      name: 'controlPrice',
      component: () => import('./views/system/ControlPrice.vue')
    },
    {
      path: '/system',
      name: 'system',
      component: () => import('./views/system/System.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/system/Message.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/system/Car.vue')
    },
    {
      path: '/postage',
      name: 'postage',
      component: () => import('./views/postage.vue')
    }
  ]
})

