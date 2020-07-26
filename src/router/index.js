import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 按需引入
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login');
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home');


const routes = [
  {
    path: '/',
    redirect: '/user/login'
  },
  {
    path: '/user/login',
    component: login
  },
  {
    path: '/manager',
    component: home
  }
]

export default new VueRouter({
  mode: 'history',
  routes,
  // strick: process.env.NODE_ENV !== 'production'
})