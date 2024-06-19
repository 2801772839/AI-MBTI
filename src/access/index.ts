import router from "@/router";
import {useLoginUserStore} from "@/store/userStore.ts";
import ACCESS_ENUM from "@/access/AccessEnum.ts";
import checkAccess from "@/access/checkAccess.ts";
// 进入页面之前进行权限判断
router.beforeEach(async (to, from, next) => {
        // 获取当前用户
        const loginUserStore = useLoginUserStore()
        let loginUser = loginUserStore.loginUser
        // 如果之前没有获取过登录信息 才自动登录
        if (!loginUser || !loginUser.userRole) {
            // 加await 是为了等待用户登录成功并获取到数据后 再执行操作
            await loginUserStore.fetchLoginUser()
            loginUser = loginUserStore.loginUser
        }

        //当前用户需要的权限
        const needAccess = to.meta?.access as string ?? ACCESS_ENUM.NOT_LOGIN
        // 要跳转的页面需要登录
        if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
            if (!loginUser || !loginUser.userRole || loginUser.userRole === ACCESS_ENUM.NOT_LOGIN) {
                next(`/user/login/redirect'${to.fullPath}`)
            }
            // 如果用户已经登录，判断权限是否足够
            if (!checkAccess(loginUser, needAccess)) {
                next('/noAuth')
                return
            }
            next()
        }
    }
)