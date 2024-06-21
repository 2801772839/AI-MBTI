<template>
  <el-form
      :inline="true"
      style="margin-bottom: 20px"
      label-position="left"
      :model="FormSearchParams"
      label-width="auto"
      status-icon
  >
    <el-form-item label="结果名称" prop="resultName">
      <el-input
          v-model="FormSearchParams.resultName"
          placeholder="请输入结果名称"
      />
    </el-form-item>
    <el-form-item label="结果描述" prop="resultDesc">
      <el-input
          v-model="FormSearchParams.resultDesc"
          placeholder="请输入结果描述"
      />
    </el-form-item>
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
    <el-table-column prop="id" label="id" width="180"/>
    <el-table-column prop="choices" label="选项" width="180"/>
    <el-table-column prop="resultId" label="结果 id" width="180"/>
    <el-table-column prop="resultName" label="名称" width="180"/>
    <el-table-column prop="resultDesc" label="描述" width="180"/>
    <el-table-column prop="resultPicture" label="图片" width="180">
      <template #default="{ row}">
        <el-image width="64" :src="row.resultPicture"/>
      </template>
    </el-table-column>
    <el-table-column prop="resultScore" label="得分" width="180"/>
    <el-table-column prop="appId" label="应用 id" width="180"/>
    <el-table-column prop="appType" label="应用类型" width="180">
      <template #default="{ row}">
        {{ APP_TYPE_MAP[row.appType] }}
      </template>
    </el-table-column>
    <el-table-column prop="scoringStrategy" label="评分策略" width="180">
      <template #default="{ row}">
        {{ APP_SCORING_STRATEGY_MAP[record.scoringStrategy] }}
      </template>
    </el-table-column>
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
import {deleteUserAnswerUsingPost, listUserAnswerByPageUsingPost} from "@/api/userAnswerController.ts";
import {APP_SCORING_STRATEGY_MAP, APP_TYPE_MAP} from "@/constant/app";


const FormSearchParams = ref<API.UserAnswerQueryRequest>({})
// 初始化查询参数(不应该被修改
const initSearchParams = {
  current: 1,
  pageSize: 10,
}
const searchParams = ref<API.UserAnswerQueryRequest>({
  ...initSearchParams,
})
const dataList = ref<API.UserAnswer[]>([])
const total = ref<number>(0)

/**
 *  加载数据
 */
const loadData = async () => {
  const res = await listUserAnswerByPageUsingPost(searchParams.value)
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
const handleDelete = async (row: API.UserAnswer) => {
  if (!row.id) return
  const res = await deleteUserAnswerUsingPost({
    id: row.id,
  })
  if (res.data.code === 0) {
    loadData()
  } else {
    ElMessage.error('删除数据失败' + res.data.message)
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
</script>

