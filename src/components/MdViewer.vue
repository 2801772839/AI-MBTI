<template>
  <Viewer :value="value" :plugins="plugins" />
</template>

<script lang="ts" setup>
import { Viewer } from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
/**
 * 定义组件属性类型
 */
interface Props {
  value: string
}

defineProps<Props>()

const plugins = [gfm(), highlight()]
/**
 * 给组件指定初始值
 */
const props = withDefaults(defineProps<Props>(), {
  value: () => '',
})
</script>
<style lang="less" scoped></style>
