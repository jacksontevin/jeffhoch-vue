import * as types from './types'

const mutations = {
  [types.SET_NOTIFICATION_COUNT](state, payload) {
    state.adminNotificationsCounts = payload
  },
  [types.SET_NOTIFICATION_LOADER](state, payload) {
    state.loading = payload
  },
  [types.SET_NOTIFICATION_NEXT_ALLOW](state, payload) {
    state.isAllowNextPage = payload
  },
  [types.UPDATE_NOTIFICATION](state, payload) {
    state.adminNotifications = payload
  },
  [types.SET_NOTIFICATION](state, payload) {
    if (payload.code === 200) {
      state.adminNotifications = payload
    }
  },
}
export default mutations
