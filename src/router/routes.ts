import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/home',
    name: '主页',
    component: () => import('@/views/home.vue'),
  },
  // {
  //   path: '*',
  //   name: '404',
  //   component: () => import('@/views/404.vue'), // 404 页面
  // },
]
