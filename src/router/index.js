import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import myDNA from '@/view/myDNA'
import find from '@/view/find'
import news from '@/view/news'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/myDNA',
      name: 'myDNA',
      component: myDNA
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
  ]
})
