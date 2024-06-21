<template>
  <div id="adminUserPage">
    <h2 style="margin-bottom: 16px">用户管理</h2>
    <el-form
        :inline="true"
        style="margin-bottom: 20px"
        label-position="left"
        :model="FormSearchParams"
        label-width="auto"
        status-icon
    >
      <el-form-item label="用户名" prop="userName">
        <el-input
            v-model="FormSearchParams.userName"
            placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item label="用户简介" prop="userProfile">
        <el-input
            v-model="FormSearchParams.userProfile"
            placeholder="请输入用户简介"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doSearch()" style="width: 100px">
          搜索
        </el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataList" style="width: 100%" height="600">
      <el-table-column prop="id" label="ID" width="180"/>
      <el-table-column prop="userAccount" label="账号" width="180"/>
      <el-table-column prop="userName" label="用户昵称" width="180"/>
      <el-table-column prop="userAvatar" label="用户头像" width="180">
        <template #default="{ row }">
          <el-image
              :src="row.userAvatar"
              alt="头像"
              style="width: 50px; height: auto"
          />
        </template>
      </el-table-column>
      <el-table-column prop="userProfile" label="用户简介" width="180"/>
      <el-table-column prop="userRole" label="用户角色" width="180"/>
      <el-table-column prop="createTime" label="创建时间" width="180"/>
      <el-table-column prop="updateTime" label="更新时间" width="180"/>
      <el-table-column prop="isDelete" label="是否删除" width="180"/>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button size="small" type="danger" @click="handleDelete(row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex; justify-content: flex-end">
      <el-pagination
          :current-page="searchParams.current"
          :page-size="searchParams.pageSize"
          layout="total, prev, pager, next"
          :total="parseInt(total)"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  deleteUserUsingPost,
  listUserByPageUsingPost,
} from '@/api/userController.ts'
import {ref, watchEffect} from 'vue'
import {ElMessage} from 'element-plus'
import dayjs from 'dayjs'

console.log('1111111111111111111111')
const FormSearchParams = ref<API.UserQueryRequest>({})
// 初始化查询参数(不应该被修改
const initSearchParams = {
  current: 1,
  pageSize: 10,
}
const searchParams = ref<API.UserQueryRequest>({
  ...initSearchParams,
})
const dataList = ref<API.User>([])
const total = ref<number>(0)
/**
 *  执行搜索
 */
const doSearch = () => {
  searchParams.value = {
    ...initSearchParams,
    ...FormSearchParams.value,
  }
}
/**
 *  加载数据
 */
const loadData = async () => {
  const res = await listUserByPageUsingPost(searchParams.value)
  if (res.data.code === 0) {
    dataList.value =
        res.data.data?.records.map(item => ({
          ...item,
          createTime: dayjs(item.createTime).format('YYYY-MM-DD HH:mm'),
          updateTime: dayjs(item.updateTime).format('YYYY-MM-DD HH:mm'),
        })) || []
    total.value = res.data.data?.total || 0
  } else {
    ElMessage.error('获取数据失败' + res.data.message)
  }
}
/**
 *  监听searchParams 改变时触发数据的重新加载
 */
watchEffect(() => {
  loadData()
})

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
/**
 *  分页变化时 触发数据加载
 * @param val
 */
const handleCurrentChange = (val: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: val,
  }
}

const handleDelete = async (row: API.User) => {
  console.log(row.id)
  if (!row.id) return
  const res = await deleteUserUsingPost({
    id: row.id,
  })
  if (res.data.code === 0) {
    loadData()
  } else {
    ElMessage.error('删除数据失败' + res.data.message)
  }
}
</script>

<style></style>
