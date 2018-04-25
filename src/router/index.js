import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/icon',
      component: (resolve) => {
        require(['@/pages/PageIcon'], resolve)
      }
    },
    {
      path: '/button',
      component: (resolve) => {
        require(['@/pages/PageButton'], resolve)
      }
    },
    {
      path: '/messgea',
      component: (resolve) => {
        require(['@/pages/PageMessgea'], resolve)
      }
    },
    {
      path: '/modal',
      component: (resolve) => {
        require(['@/pages/PageModal'], resolve)
      }
    },
    {
      path: '/tabs',
      component: (resolve) => {
        require(['@/pages/PageTabs'], resolve)
      }
    }
  ]
})
