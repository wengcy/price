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
      component: () => import('./views/ControlPrice.vue')
    }
  ]
})