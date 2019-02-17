import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import categroy from "@/views/categroy"
import shopcart from "@/views/shopcart"
import mine from "@/views/mine"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',name: 'home',component: Home},
    {path: '/categroy',name: 'categroy',component: categroy},
    {path: '/shopcart',name: 'shopcart',component: shopcart},
    {path: '/mine',name: 'mine',component: mine},
  ]
})
