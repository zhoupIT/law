import Request from '@/js_sdk/luch-request/luch-request/index.js'


const getTokenStorage = () => {
  let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDMiLCJpYXQiOjE2MDU4NTU1NTEsImV4cCI6MTYxMTkwMzU1MX0.PJnSpJlIxUF2PWDhfClXExbgm7W4Zntog1O5rUgJ2BljIEOtQ042Uikn4fJIrF9cUaHU2BLTCoXe_NgbFnMvwA'
  try {
    // token = uni.getStorageSync('token')
  } catch (e) {
  }
  return token
}

const http = new Request()
http.setConfig((config) => { /* 设置全局配置 */
  config.baseURL = 'http://192.168.1.175:7799/hengz' /* 根域名不同 */
  config.header = {
    b: 2, // 演示
  }
  return config
})


http.interceptors.request.use((config) => { /* 请求之前拦截器。可以使用async await 做异步操作 */
  config.header = {
    ...config.header,
    token: getTokenStorage()
  }
  /*
 if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
   return Promise.reject(config)
 }
 */
  return config
}, (config) => {
  return Promise.reject(config)
})


http.interceptors.response.use(async (response) => { /* 请求之后拦截器。可以使用async await 做异步操作  */
  // if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
  //   return Promise.reject(response)
  // }
  return response
}, (response) => { // 请求错误做点什么。可以使用async await 做异步操作
  console.log(response)
  return Promise.reject(response)
})

export {
  http
}
