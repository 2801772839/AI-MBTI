<template>
  <el-space>
    <el-upload
      class="avatar-uploader"
      :file-list="file ? [file] : []"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-progress="customRequest"
    >
      <img :src="file.url" class="avatar" alt="" />
      <el-icon class="avatar-uploader-icon">
        <Plus />
      </el-icon>
    </el-upload>
  </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import { uploadFileUsingPost } from '@/api/fileController.ts'

/**
 * 定义组件属性类型
 */
interface Props {
  biz: string
  onChange?: (url: string) => void
  value?: string
}

/**
 * 给组件指定初始值
 */
const props = withDefaults(defineProps<Props>(), {
  value: () => '',
})

const file = ref()
if (props.value) {
  file.value = {
    url: props.value,
    percent: 100,
    status: 'done',
  }
}
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = rawFile => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
const customRequest = async (option: any) => {
  const { onError, onSuccess, fileItem } = option

  const res: any = await uploadFileUsingPost(
    { biz: props.biz },
    {},
    fileItem.file
  )
  if (res.data.code === 0 && res.data.data) {
    const url = res.data.data
    file.value = {
      name: fileItem.name,
      file: fileItem.file,
      url,
    }
    props.onChange?.(url)
    onSuccess()
    console.log(file.value)
  } else {
    ElMessage.error('上传失败，' + res.data.message || '')
    onError(new Error(res.data.message))
  }
}
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
