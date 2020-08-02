import axios from 'axios'
import qs from 'qs'
import {Notification} from 'element-ui'

const JsonHeader = {
  'Content-Type': 'application/json'
}

const instance = axios.create({
  // baseURL: 'https://dev.simu800.com/xq-manager',
  headers: JsonHeader,
  timeout: 6000
})

const post = (url, data) => {
  return instance.post(url, data)
}

const get = (url, data) => {
  return instance.get(url, qs.stringify(data))
}

instance.interceptors.response.use(response => {
  // response 包括 config、data、headers、request、status、statusText
  const {data} = response
  // if(data.code === 1014) {
  //   // token 失效
  //   window.location.href = `${window.location.origin}/user/login`;
  // }
  if(data.code !== 1008) {
    Notification({
      title: '提示',
      message: `错误码：${data.code}, 错误信息：${data.message}`
    })
  }
  return data;
}, () => {
  Notification({
    title: '提示',
    message: `服务器错误`
  })
  
  return {
    code: 1010,
    data: {},
    message: '服务错误'
  }
  
})

export default {
  post,
  get,
}
