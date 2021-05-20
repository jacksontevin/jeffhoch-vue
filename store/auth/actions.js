import * as types from './types'

export default {
  setUser(context, payload) {
    localStorage.setItem('eb-island:access_token', payload.token)
    localStorage.setItem('eb-island:type', payload.userInfo.role)
    context.commit(types.SET_LOGIN_STATUS, true)
    context.commit(types.SET_LOGGEDIN_USER, payload.userInfo)
    context.commit(types.SET_LOGIN_TYPE, payload.userInfo.role)
  },
  [types.SET_USER_LOGOUT](context, payload) {
    localStorage.removeItem('eb-island:access_token')
    localStorage.removeItem('eb-island:type')
    localStorage.removeItem('eb-island:loggedInUser')
    context.commit(types.SET_USER_LOGOUT, payload)
  },
  setUserInfo(context, payload) {
    context.commit(types.SET_LOGGEDIN_USER, payload)
  },
}
