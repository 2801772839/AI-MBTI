<template>
  <div id="userRegisterPage">
    <h2 style="margin-bottom: 16px">用户注册</h2>
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

      <el-form-item label="密码" prop="userPassword" show-password>
        <el-input v-model="Form.userPassword" placeholder="请输入密码" show-password/>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword" >
        <el-input v-model="Form.checkPassword" placeholder="请再次输入密码" show-password/>
      </el-form-item>
      <el-form-item>
        <div style="display: flex;
                  width:100%;
                  align-items: center;
                  justify-content: space-between">
          <el-button type="primary" @click="submitForm(Form)" style="width: 120px">
            注册
          </el-button>
          <el-button @click="login" :underline="false" style="color: blueviolet" link>
            老用户登录
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";
import {userRegisterUsingPost} from "@/api/userController.ts";
import {useLoginUserStore} from "@/store/userStore.ts";


const loginUserStore = useLoginUserStore()
const router = useRouter()
const Form = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
} as API.UserRegisterRequest)


const submitForm = async (Form: any) => {
  const res = await userRegisterUsingPost(Form)
  // console.log(res)
  if (res.data.code === 0) {
    ElMessage.success('注册成功')
    router.push({
      path: "/user/login",
      replace: true
    })
  } else {
    ElMessage.error("注册失败" + res.data.message)
  }
}
const login = () => {
  router.push({
    path: "/user/login",
    replace: true
  })
}

</script>