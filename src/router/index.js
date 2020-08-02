import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 按需引入
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login');
// const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home');
const layout = r => require.ensure([], () => r(require('@/pages/layout/layout')), 'layout');
const note = r => require.ensure([], () => r(require('@/pages/note/note')), 'note');
const charts = r => require.ensure([], () => r(require('@/pages/charts/chart')), 'charts');
const set = r => require.ensure([], () => r(require('@/pages/set/set')), 'set');


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
    name: '首页',
    component: layout,
    children: [
      {
        path: '/manager/set',
        name: '设置',
        component: set
      },{
        path: '/manager/note',
        name: '说明',
        component: note
      },{
        path: '/manager/chart',
        name: '图表',
        component: charts
      }
    ]
  },
  // {
  //   path: '404',
  // }
]

export default new VueRouter({
  mode: 'history',
  routes,
  // strick: process.env.NODE_ENV !== 'production'
})