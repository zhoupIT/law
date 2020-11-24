import Request from '@/js_sdk/luch-request/luch-request/index.js'


const getTokenStorage = () => {
  // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDMiLCJpYXQiOjE2MDU4NTU1NTEsImV4cCI6MTYxMTkwMzU1MX0.PJnSpJlIxUF2PWDhfClXExbgm7W4Zntog1O5rUgJ2BljIEOtQ042Uikn4fJIrF9cUaHU2BLTCoXe_NgbFnMvwA'
  let token = '';
  try {
    token = uni.getStorageSync('token')
  } catch (e) {
  }
  return token
}

const http = new Request()
export const baseUrl = 'http://192.168.1.175:7799/hengz'
http.setConfig((config) => { /* 设置全局配置 */
  config.baseURL = baseUrl /* 根域名不同 */
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
  let res = response.data;
  console.log(res)
  if (res.code != 0) { // 服务端返回的状态码不等于200，则reject()
    uni.showToast({
    	title:res.msg,
    	position:'bottom',
    	icon:'none'
    })
    // return Promise.reject(response)
  }
  return res
}, (error) => { // 请求错误做点什么。可以使用async await 做异步操作
  console.log(error)
  uni.showToast({
  	title:error.errMsg,
  	position:'bottom',
  	icon:'none'
  })
  return Promise.reject(error)
})

export {
  http
}
