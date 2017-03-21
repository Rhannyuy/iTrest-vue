import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Schedule from '@/components/schedule'
import Clockin from '@/components/clockin'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/clockin',
      name: 'clockin',
      component: Clockin
    }
  ]
})
