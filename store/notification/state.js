const state = {
  adminNotificationsCounts: 0,
  loading: false,
  isAllowNextPage: true,
  adminNotifications: {
    notifications: [],
    pagination: {
      currentPage: 1,
      perRowPage: 20,
    },
    status: '',
    code: 200,
    messages: '',
  },
}

export default state
