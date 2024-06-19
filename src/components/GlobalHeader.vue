<template>
  <div id="globalHeader">
    <el-row class="row">
      <el-col :span="23">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router="true"
        >
          <div class="titleBar">
            <img src="@/assets/logo.png" alt="" class="logo" />
            <div class="title">AI答题</div>
          </div>
          <el-menu-item :index="item.path" v-for="item in visibleRoutes">
            {{ item.name }}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="1">
        <el-button type="primary">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from '@/router/routes'
const router = useRouter()

// 菜单项
const activeIndex = ref(['/'])
// 路由跳转时, 自动更新选中的菜单项
router.afterEach(to => {
  activeIndex.value = [to.path]
})
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const visibleRoutes = routes.filter(item => {
  if (item.meta?.hideInMenu) {
    return false
  }
  return true
})
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
