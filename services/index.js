import https from 'https'
import http from 'http'
import Axios from 'axios'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1

export function isValidResponse(resp) {
  return resp && resp.status === 200 && resp.data.status === 1
}

export const CONFIG = Axios.create({
  baseURL: process.env.VUE_APP_API_LOCATION || 'http://localhost:4002/api',
})

Axios.defaults.httpsAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 5000,
  keepAliveMsecs: 3000000,
})
Axios.defaults.httpAgent = new http.Agent({
  keepAlive: true,
  maxSockets: 5000,
  keepAliveMsecs: 3000000,
})

CONFIG.interceptors.request.use((config) => {
  const token = localStorage.getItem('eb-island:access_token')
  if (token) config.headers.Authorization = `${token}`
  config.headers['Content-Type'] = 'application/json'
  return config
})

export const methods = {
  GET: 'GET',
  GET_CONFIG: 'GET_CONFIG',
  POST: 'POST',
  POST_CONFIG: 'POST_CONFIG',
  PUT: 'PUT',
  PUT_CONFIG: 'PUT_CONFIG',
  DELETE: 'DELETE',
}

export class APIError {
  data

  constructor(msg) {
    this.data = msg.data
  }

  get getMessage() {
    if (this.message.code === 401 || this.message.code === '401') {
      localStorage.removeItem('eb-island:type')
      localStorage.removeItem('eb-island:loggedInUser')
      localStorage.removeItem('eb-island:access_token')
      window.location.href = '/'
    }
    return this.message
  }
}

export const serviceMaker = async (url, method, data = {}, config = {}) => {
  try {
    let result
    const APIInstance = CONFIG

    switch (method) {
      case 'GET': {
        result = await APIInstance.get(url)
        break
      }
      case 'GET_CONFIG': {
        result = await APIInstance.get(url, config)
        break
      }
      case 'POST': {
        result = await APIInstance.post(url, data)
        break
      }
      case 'POST_CONFIG': {
        result = await APIInstance.post(url, data, config)
        break
      }
      case 'PUT': {
        result = await await APIInstance.put(url, data)
        break
      }
      case 'PUT_CONFIG': {
        result = await await APIInstance.put(url, data, config)
        break
      }
      case 'DELETE': {
        result = await APIInstance.delete(url)
        break
      }
      default: {
        // eslint-disable-next-line no-throw-literal
        throw 'InvalidMethod'
      }
    }
    if (!isValidResponse) {
      // eslint-disable-next-line no-throw-literal
      throw 'InvalidResponse'
    }
    return result.data
  } catch (err) {
    console.log(err)
    // validationMessages.validationMessages(403);
    // if (err.response.status === 401) {
    //   store.dispatch("auth/resetUser");
    //   if (router.history.current.fullPath != "/login") {
    //     router.push({ name: "Login" });
    //     Vue.notify({
    //       group: "eb-notification",
    //       title: "Unauthorized Access.",
    //       text: "Your Authorization Token Has Expired!",
    //       type: "error",
    //       duration: 7000
    //     });
    //   }
    // }
    // // tslint:disable-next-line:no-console
    throw new APIError(
      err.response
        ? err.response
        : {
            data: {
              status: 'error',
              code: 500,
              message: 'Something went wrong',
              data: null,
            },
          }
    )
  }
}
