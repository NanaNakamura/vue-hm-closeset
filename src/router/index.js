import Vue from 'vue'
import Router from 'vue-router'
import HamburgerMenuCloseSet from '@/components/HamburgerMenuCloseSet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HamburgerMenuCloseSet',
      component: HamburgerMenuCloseSet
    }
  ]
})
