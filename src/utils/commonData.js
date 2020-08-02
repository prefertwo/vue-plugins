const response = {
  success: 1008, // 请求成功
  fail: 1009, // 请求失败
  invalid: 1010, // token失效
  illegal: 1020, // 参数不合法
  disable: 1030, // 无操作权限
  safeTokenInvalid: 1025, // 安全token失效  
}

export default {
  status: response
}