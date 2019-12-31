import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/login'
import index from '@/views/index'
import template0 from '@/views/template0'
import test from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      redirect:'/test'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/template0',
      name: 'template0',
      component: template0
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
