import * as types from './types'

const mutations = {
  [types.SET_LOGGEDIN_USER](state, payload) {
    localStorage.setItem('eb-island:loggedInUser', JSON.stringify(payload))
    state.loggedInUser = Object.assign({}, payload)
  },
  [types.SET_USER_LOGOUT](state, payload) {
    state.loggedInUser = Object.assign({}, payload)
    state.isLoggedIn = false
    state.userType = null
  },
  [types.SET_LOGIN_STATUS](state, payload) {
    state.isLoggedIn = true
  },
  [types.SET_LOGIN_TYPE](state, payload) {
    state.userType = payload
  },
}
export default mutations
