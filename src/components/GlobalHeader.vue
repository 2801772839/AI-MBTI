<template>
  <div id="globalHeader">
    <el-row class="row">
      <el-col :span="18">
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
          <el-menu-item :index="item.path" v-for="item in routes">
            {{ item.name }}
          </el-menu-item>
          <el-menu-item index="2">Info</el-menu-item>
          <el-menu-item index="3">Orders</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { routes } from '@/router/routes'
// import { useRouter } from 'vue-router'
// const router = useRouter()

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
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
