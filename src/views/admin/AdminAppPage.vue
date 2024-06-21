<template>
  <el-form
      :inline="true"
      style="margin-bottom: 20px"
      label-position="left"
      :model="FormSearchParams"
      label-width="auto"
      status-icon
  >
    <el-form-item label="应用名称" prop="appName">
      <el-input
          v-model="FormSearchParams.appName"
          placeholder="请输入应用名称"
      />
    </el-form-item>
    <el-form-item label="应用描述" prop="appDesc">
      <el-input
          v-model="FormSearchParams.appDesc"
          placeholder="请输入应用描述"
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
    <el-table-column prop="appName" label="名称" width="180"/>
    <el-table-column prop="appDesc" label="描述" width="180"/>
    <el-table-column prop="appIcon" label="图标" width="180">
      <template #default="{ row }">
        <el-image
            :src="row.appIcon"
            style="width: 50px"
        />
      </template>
    </el-table-column>
    <el-table-column prop="appType" label="应用类型" width="180">
      <template #default="{ row }">
        {{ APP_TYPE_MAP[row.appType] }}
      </template>
    </el-table-column>
    <el-table-column prop="scoringStrategy" label="评分策略" width="180">
      <template #default="{ row }">
        {{ APP_SCORING_STRATEGY_MAP[row.scoringStrategy] }}
      </template>
    </el-table-column>
    <el-table-column prop="reviewStatus" label="审核状态" width="180">
      <template #default="{ row }">
        {{ REVIEW_STATUS_MAP[row.reviewStatus] }}
      </template>
    </el-table-column>
    <el-table-column prop="reviewMessage" label="审核信息" width="180"/>
    <el-table-column prop="reviewTime" label="审核时间" width="180"/>
    <el-table-column prop="reviewerId" label="审核人 id" width="180"/>
    <el-table-column prop="userId" label="用户 id" width="180"/>
    <el-table-column prop="createTime" label="创建时间" width="180"/>
    <el-table-column prop="updateTime" label="更新时间" width="180"/>
    <el-table-column label="操作">
      <template #default="{ row }">
        <el-space>
          <el-button
              v-if="row.reviewStatus !== REVIEW_STATUS_ENUM.PASS"
              status="success"
              @click="doReview(row, REVIEW_STATUS_ENUM.PASS, '')"
          >
            通过
          </el-button>
          <el-button
              v-if="row.reviewStatus !== REVIEW_STATUS_ENUM.REJECT"
              status="warning"
              @click="doReview(row, REVIEW_STATUS_ENUM.REJECT, '不符合上架要求')"
          >
            拒绝
          </el-button>
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
import {deleteAppUsingPost, doAppReviewUsingPost, listAppByPageUsingPost} from "@/api/appController.ts";
import {
  APP_SCORING_STRATEGY_MAP,
  APP_TYPE_MAP,
  REVIEW_STATUS_ENUM,
  REVIEW_STATUS_MAP,
} from "@/constant/app";


const FormSearchParams = ref<API.AppQueryRequest>({})
// 初始化查询参数(不应该被修改
const initSearchParams = {
  current: 1,
  pageSize: 10,
}
const searchParams = ref<API.AppQueryRequest>({
  ...initSearchParams,
})
const dataList = ref<API.User[]>([])
const total = ref<number>(0)
console.log('222222222222222')
/**
 *  加载数据
 */
const loadData = async () => {
  const res = await listAppByPageUsingPost(searchParams.value)
  if (res.data.code === 0) {

    dataList.value =
        res.data.data?.records.map(item => ({
          ...item,
          createTime: dayjs(item.createTime).format('YYYY-MM-DD HH:mm'),
          updateTime: dayjs(item.updateTime).format('YYYY-MM-DD HH:mm'),
          reviewTime: dayjs(item.reviewTime).format('YYYY-MM-DD HH:mm'),
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
const handleDelete = async (row: API.App) => {
  console.log(row.id)
  if (!row.id) return
  const res = await deleteAppUsingPost({
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
