<template>
  <el-config-provider :locale="zhCn">
    <div id="app">
      <template v-if="route.path.startsWith('/user')">
        <router-view />
      </template>
      <template v-else>
        <BasicLayout />
      </template>
    </div>
  </el-config-provider>
</template>
<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<style>
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}
</style>
