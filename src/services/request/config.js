import WeiRequester from './wei-request'

//创建、配置实例并导出
const config1 = {
  baseURL:"http://codercba.com:1888/airbnb/api",
  timeout:10000,
}
const instance1 = new WeiRequester(config1)
//响应拦截器
instance1.setResponseInterceptor((res) => {
  return res.data
})

const config2 = {
  baseURL:"http://codercba.com:1888/airbnb/api",
  timeout:10000,
}
const instance2 = new WeiRequester(config1)
//响应拦截器
instance2.setResponseInterceptor((res) => {
  return res.data
})

//不管是CJS还是ESM，都只会运行一遍，然后导出引用。因此所有模块拿到同一个实例。
export default instance1
export {instance2}

