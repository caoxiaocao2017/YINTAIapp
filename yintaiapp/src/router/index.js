import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Qiangxian from '@/components/Qiangxian'
import Fenlei from '@/components/Fenlei'
import Shopping from '@/components/Shopping'
import My from '@/components/My'
import Header from '@/components/Header'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/qx',
      name: 'Qiangxian',
      component:Qiangxian
    },
    {
      path: '/fl',
      name: 'Fenlei',
      component:Fenlei,
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component:Shopping
    },
    {
      path: '/me',
      name: 'My',
      component:My
    }
  ]
})
