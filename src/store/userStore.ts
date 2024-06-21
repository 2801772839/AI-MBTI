import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getLoginUserUsingGet } from '@/api/userController'
import ACCESS_ENUM from '@/access/AccessEnum.ts'

/**
 *  登录用户信息全局状态
 */
export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<API.LoginUserVO>({
    userName: '未登录',
  })

  // 设置登录用户信息
  function setLoginUser(newLoginUser: API.LoginUserVO) {
    loginUser.value = newLoginUser
  }

  // 获取登录用户信息
  async function fetchLoginUser() {
    const res = await getLoginUserUsingGet()
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data
    } else {
      loginUser.value = { userRole: ACCESS_ENUM.NOT_LOGIN }
    }
  }

  return { loginUser, setLoginUser, fetchLoginUser }
})
