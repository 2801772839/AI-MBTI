<template>
  <div id="userLoginPage">
    <h2 style="margin-bottom: 16px">用户登录</h2>
    <el-form
        style="width: 480px ;margin: 0 auto"
        label-position="left"
        :model="Form"
        label-width="auto"
        class="demo-ruleForm"
        status-icon
    >
      <el-form-item label="用户名" prop="userAccount">
        <el-input v-model="Form.userAccount" placeholder="请输入账号"/>
      </el-form-item>
      <el-form-item label="密码" prop="userPassword">
        <el-input v-model="Form.userPassword" placeholder="请输入密码" show-password/>
      </el-form-item>
      <el-form-item>
        <div style="display: flex;
                  width:100%;
                  align-items: center;
                  justify-content: space-between;">
          <el-button type="primary" @click="submitForm(Form)" style="width: 120px">
            登录
          </el-button>
          <el-button @click="register" :underline="false" style="color: blueviolet" link>
            新用户注册
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'
import {userLoginUsingPost} from "@/api/userController.ts";
import {useLoginUserStore} from "@/store/userStore.ts";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const loginUserStore = useLoginUserStore()
const router = useRouter()
const Form = reactive({
  userAccount: '',
  userPassword: '',
} as API.UserLoginRequest)


const submitForm = async (Form: any) => {
  const res = await userLoginUsingPost(Form)
  // console.log(res)
  if (res.data.code === 0) {
    await loginUserStore.fetchLoginUser()
    ElMessage.success('登录成功')
    router.push({
      path: "/",
      replace: true
    })
  } else {
    ElMessage.error("登录失败" + res.data.message)
  }
}
const register = () => {
  router.push({
    path: "/user/register",
    replace: true
  })
}


</script>