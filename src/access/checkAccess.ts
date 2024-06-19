import ACCESS_ENUM from "@/access/AccessEnum.ts";

/**
 * 检查用户是否有权限访问
 * @param loginUser 当前登录用户
 * @param needAccess 需要访问的权限
 * @returns boolean 是否有权限访问
 */
const checkAccess = (loginUser: API.LoginUserVO, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
    // 检查用户是否有权限访问
    const loginUserAccess = loginUser.userRole ?? ACCESS_ENUM.NOT_LOGIN;
    if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
        return true
    }
    if (needAccess === ACCESS_ENUM.USER) {
        if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
            return false
        }
    }
    // 如果管理员才能访问
    if (needAccess === ACCESS_ENUM.ADMIN) {
        if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
            return false
        }
    }
    return true
}
export default checkAccess