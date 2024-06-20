<template>
  <Editor :value="value" :plugins="plugins" @change="handleChange" />
</template>

<script lang="ts" setup>
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { Editor, Viewer } from '@bytemd/vue-next'

import { ref } from 'vue'
const plugins = [gfm(), highlight()]
const value = ref('')

const handleChange = (v: string) => {
  value.value = v
}
</script>
<style lang="less" scoped></style>
