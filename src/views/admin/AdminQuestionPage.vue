<template>
  <el-form
      :inline="true"
      style="margin-bottom: 20px"
      label-position="left"
      :model="FormSearchParams"
      label-width="auto"
      status-icon
  >
    <el-form-item label="应用 ID" prop="appId">
      <el-input
          v-model="FormSearchParams.appId"
          placeholder="请输入应用 id"
      />
    </el-form-item>
    <el-form-item label="用户 id" prop="userId">
      <el-input
          v-model="FormSearchParams.userId"
          placeholder="请输入用户 id"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="doSearch()" style="width: 100px">
        搜索
      </el-button>
    </el-form-item>
  </el-form>
  <el-table :data="dataList" style="width: 100%" height="600">

    <el-table-column prop="id" label="id" width="180"/>
    <el-table-column prop="questionContent" label="题目内容" width="180">
      <template #default="{ row}">
        <div
            v-for="question in JSON.parse(row.questionContent)"
            :key="question.title"
        >
          {{ question }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="appId" label="应用 id" width="180"/>
    <el-table-column prop="userId" label="用户 id" width="180"/>
    <el-table-column prop="createTime" label="创建时间" width="180"/>
    <el-table-column prop="updateTime" label="更新时间" width="180"/>
    <el-table-column label="操作">
      <template #default="{ row }">
        <el-space>
          <el-button status="danger" @click="handleDelete(row)">删除</el-button>
        </el-space>
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

</template>

<script lang="ts" setup>
import {ref, watchEffect} from 'vue'
import {ElMessage} from 'element-plus'
import dayjs from 'dayjs'
import {doAppReviewUsingPost} from "@/api/appController.ts";

import {deleteQuestionUsingPost, listQuestionByPageUsingPost} from "@/api/questionController.ts";


const FormSearchParams = ref<API.QuestionQueryRequest>({})
// 初始化查询参数(不应该被修改
const initSearchParams = {
  current: 1,
  pageSize: 10,
}
const searchParams = ref<API.QuestionQueryRequest>({
  ...initSearchParams,
})
const dataList = ref<API.Question[]>([])
const total = ref<number>(0)

/**
 *  加载数据
 */
const loadData = async () => {
  const res = await listQuestionByPageUsingPost(searchParams.value)
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
 *  执行搜索
 */
const doSearch = () => {
  searchParams.value = {
    ...initSearchParams,
    ...FormSearchParams.value,
  }
}


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
/**
 * 删除
 * @param row
 */
const handleDelete = async (row: API.Question) => {
  console.log(row.id)
  if (!row.id) return
  const res = await deleteQuestionUsingPost({
    id: row.id,
  })
  if (res.data.code === 0) {
    loadData()
  } else {
    ElMessage.error('删除数据失败' + res.data.message)
  }
}

/**
 * 审核
 * @param record
 * @param reviewStatus
 * @param reviewMessage
 */
const doReview = async (
    record: API.App,
    reviewStatus: number,
    reviewMessage?: string
) => {
  if (!record.id) {
    return;
  }

  const res = await doAppReviewUsingPost({
    id: record.id,
    reviewStatus,
    reviewMessage,
  });
  if (res.data.code === 0) {
    loadData();
  } else {
    Elmessage.error("审核失败，" + res.data.message);
  }
};

/**
 *  监听searchParams 改变时触发数据的重新加载
 */
watchEffect(() => {
  loadData()
})
</script>

<style></style>
