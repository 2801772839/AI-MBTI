import {RouteRecordRaw} from 'vue-router'
import ACCESS_ENUM from '@/access/AccessEnum.ts'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '主页',
        component: () => import('@/views/home.vue'),
    },
    {
        path: '/admin/user',
        name: '用户管理',
        component: () => import('@/views/admin/AdminUserPage.vue'),
        meta: {
            access: ACCESS_ENUM.ADMIN,
        },
    }, {
        path: '/admin/app',
        name: '应用管理',
        component: () => import('@/views/admin/AdminAppPage.vue'),
        meta: {
            access: ACCESS_ENUM.ADMIN,
        },
    }, {
        path: '/admin/question',
        name: '题目管理',
        component: () => import('@/views/admin/AdminQuestionPage.vue'),
        meta: {
            access: ACCESS_ENUM.ADMIN,
        },
    }, {
        path: '/admin/scoring_result',
        name: '评分管理',
        component: () => import('@/views/admin/AdminScoringResultPage.vue'),
        meta: {
            access: ACCESS_ENUM.ADMIN,
        },
    }, {
        path: '/admin/user_answer',
        name: '用户回答',
        component: () => import('@/views/admin/AdminUserAnswerPage.vue'),
        meta: {
            access: ACCESS_ENUM.ADMIN,
        },
    },
    //
    {
        path: '/user',
        name: '用户',
        component: () => import('@/layouts/UserLayout.vue'),
        children: [
            {
                path: '/user/login',
                name: '登录',
                component: () => import('@/views/user/UserLoginPage.vue'),
            },
            {
                path: '/user/register',
                name: '注册',
                component: () => import('@/views/user/UserRegisterPage.vue'),
            },
        ],
        meta: {
            hideInMenu: true,
        },
    },
    //  所有没有添加到路由文件中的页面 都会重定向到这(待定)
    {
        path: '/noAuth',
        name: '无权限',
        component: () => import('@/views/NoAuthPage.vue'),
        meta: {
            hideInMenu: true,
        },
    },

]
