<template>
  <div id="basicLayout">
    <el-container style="height: 100vh">
      <el-header class="header"><GlobalHeader /></el-header>
      <el-main class="content">
        <router-view />
      </el-main>
      <el-footer class="footer">Anysg</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>
<style lang="less" scoped>
#basicLayout {
  .header {
    margin-bottom: 16px;
    box-shadow: #eee 1px 1px 5px;
  }
  .content {
    background: linear-gradient(to right, #fefefe, #fff);
    margin-bottom: 28px;
    padding: 20px;
  }
  .footer {
    background: #efefef;
    padding: 16px;
    text-align: center;
  }
}
</style>
