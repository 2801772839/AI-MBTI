<template>
  <div id="userLayout">
    <el-container style="height: 100vh">
      <el-header class="header">
        <el-space>
          <img src="../assets/logo.png" class="logo" alt="" />
          <div>答题应用平台</div>
        </el-space>
      </el-header>

      <el-main class="content">
        <router-view />
      </el-main>
      <el-footer class="footer">Anysg</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="less" scoped>
#userLayout {
  text-align: center;
  background: url('https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png')
    0% 0% / 100% 100%;
  .logo {
    width: 40px;
    height: 40px;
  }
  .header {
    margin-bottom: 20px;
    font-size: 21px;
  }
  .content {
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
