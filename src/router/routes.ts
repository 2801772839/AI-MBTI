import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '主页',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/hide',
    name: '主页',
    component: () => import('@/views/home.vue'),
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: '/home',
    name: '第二',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/user',
    name: '用户',
    component: () => import('@/layouts/UserLayout.vue'),
    children: [
      {
        path: '/user/login',
        name: '登录',
        component: () => import('@/views/home.vue'),
      },
    ],
  },
]
