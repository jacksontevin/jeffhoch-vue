export default {
  fetchNotificationCount(state) {
    return state.adminNotificationsCounts
  },
  fetchNotification(state) {
    return state.adminNotifications
  },
  notificationLoading(state) {
    return state.loading
  },
  isAllowNextPage(state) {
    return state.isAllowNextPage
  },
}
