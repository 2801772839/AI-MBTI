<template>
  <div id="globalHeader">
    <el-row class="row">
      <el-col :span="22">
        <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            router
        >
          <div class="titleBar">
            <img src="@/assets/logo.png" class="logo" alt=""/>
            <div class="title">AI答题</div>
          </div>
          <el-menu-item :index="item.path" v-for="item in visibleRoutes">
            {{ item.name }}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2">
        <div v-if="loginUserStore.loginUser.id">
          {{ loginUserStore.loginUser.userName ?? '匿名用户' }}
        </div>
        <div v-else>
          <el-button type="primary" @click="login">登录</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {useRouter} from 'vue-router'
import {routes} from '@/router/routes'
import {useLoginUserStore} from '@/store/userStore.ts'
import checkAccess from '@/access/checkAccess.ts'

const router = useRouter()
const loginUserStore = useLoginUserStore()
// 默认菜单项
const activeIndex = ref('/')

const visibleRoutes = computed(() => {
  return routes.filter(item => {
    if (item.meta?.hideInMenu) {
      return false
    }
    // 根据权限过滤菜单
    return checkAccess(loginUserStore.loginUser, item.meta?.access as string)
  })
})
// 路由跳转时, 自动更新选中的菜单项
router.afterEach(to => {
  activeIndex.value = [to.path]
})
const login = () => {
  router.push({path: '/user/login'})
}
</script>
<style lang="less" scoped>
#globalHeader {
  .row {
    align-items: center;
    white-space: nowrap;
  }

  .titleBar {
    display: flex;
    align-items: center;

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    .title {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
