import Axios from 'axios'
import QS from 'querystring'
import Call from 'api/call'
// TODO baseURL
Axios.defaults.baseURL = ''

// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 带cookie请求
Axios.defaults.withCredentials = false

// TODO 设置超时时间
Axios.defaults.timeout = 2000

// TODO http code 校验
Axios.defaults.validateStatus = function (status) {
  return status
}

// TODO GET 请求 params 序列化
Axios.defaults.paramsSerializer = function (params) {
  return QS.stringify(params)
}

// TODO 设置POST等请求 body 序列化
// Axios.defaults.transformRequest = [function (body) {
//   let data = body || {}
//   if (data instanceof window.FormData) {
//     return data
//   }
//   return QS.stringify(data)
// }]
// request拦截器
Axios.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// TODO 设置统一请求拦截
Axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  }
  return Promise.reject(response.data)
}, error => {
  return Promise.reject(error)
})

/**
 * @description 统一 GET 请求
 * @param url
 * @param params --> GET 请求参数（***?name=walid&age=25）
 */
function get (url, params) {
  return new Call((resolve, reject) => {
    Axios.get(url, {params: params})
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function post (url, body) {
  return new Call((resolve, reject) => {
    Axios.post(url, body)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/*
* delete 请求
* */
function del (url, params) {
  return new Call((resolve, reject) => {
    Axios.delete(url, {params: params})
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 PUT 请求
 * @param url
 * @param body --> PUT 请求 data
 */
function put (url, body) {
  return new Call((resolve, reject) => {
    Axios.put(url, body)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function direct (url) {
  return url
}

export default {
  get, post, direct, del, put
}
