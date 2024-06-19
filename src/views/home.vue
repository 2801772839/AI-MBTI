<template>
  <div>333333333</div>
  {{ JSON.stringify(LoginUserStroe.loginUser) }}
</template>

<script lang="ts" setup>
import { useLoginUserStore } from '@/store/userStore'

const LoginUserStroe = useLoginUserStore()
</script>
<style lang="less" scoped></style>
