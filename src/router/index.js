import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/console',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  },
  {
    path: '/console',
    name: 'console',
    redirect:'/index',
    meta:{title:'首页'},
    component: () => import('../layout/index'),
    children: [
      {
        path: '/index',   //首页
        name: 'index',
        meta: { title: '首页1' },
        component: () => import('../views/home/index')
      },
      {
        path: '/loan-input',   //贷款申请
        name: 'loan-input',
        meta: { title: '贷款申请' },
        component: () => import('../views/loanInput/index')
      },
      {
        path: '/input-manager',
        name: 'input-manager',
        meta: { title: '申请管理' ,roles: ['input']},
        component: () => import('../views/input-manager/index'),
      },
      {
        path: '/loan-approve',
        name: 'loan-approve',
        meta: { title: '贷款审批' },
        component: () => import('../views/loanApprove/index'),
        children: [
          {
            path: 'first',
            name: 'first',
            meta: { title: '终1审' },
            component: () => import('../views/loanApprove/first'),
          },
          {
            path: 'end',   //终审
            name: 'end',
            meta: { title: '终审' },
            component: () => import('../views/loanApprove/end')
          },
        ]
      }
    ]
  },
  {
    path: '*',
    redirct: '/404',
    component: () => import('../views/404/index')
  }
]
const router = new VueRouter({
  routes
})
export default router;