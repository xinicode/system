import VueRouter from 'vue-router'
import Vue from 'vue'
import { getToken } from '@/utils/setToken';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/console'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login')
  },
  {
    path: '/console',
    name: 'console',
    redirect: '/index',
    meta: { title: '首页' },
    component: () => import('../layout/index'),
    children: [
      {
        path: '/index', // 首页
        name: 'index',
        meta: { title: '首页1' },
        component: () => import('../views/home/home')
      },
      {
        path: '/loan-input', // 贷款申请
        name: 'loan-input',
        meta: { title: '贷款申请' },
        component: () => import('../views/loanInput/loan-input')
      },
      {
        path: '/input-manager',
        name: 'input-manager',
        meta: { title: '申请管理', roles: ['input'] },
        component: () => import('../views/input-manager/input-manager')
      },
      {
        path: '/loan-approve',
        name: 'loan-approve',
        meta: { title: '贷款审批' },
        component: () => import('../views/loan-approve/loan-approve'),
        children: [
          {
            path: '/loan-approve/first',
            name: '/loan-approve/first',
            meta: { title: '终1审' },
            component: () => import('../views/loan-approve/loan-approve-first'),
          },
          {
            path: '/loan-approve/end', // 终审
            name: '/loan-approve/end',
            meta: { title: '终审' },
            component: () => import('../views/loan-approve/loan-approve-end')
           
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirct: '/404',
    component: () => import('../views/404/index')
  },
  {
    path: '/loan-*',
    redirct: 'login',
    component: () => import('../views/login/login')
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log("to",to)
  console.log("from",from)
  const isAuthenticated = !_.isNull(getToken());
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})



export default router
