import request from '../utils/request'

/**
 * 获取用户信息
 */
export const GetUserInfo = params => request.post('/account/login', params)