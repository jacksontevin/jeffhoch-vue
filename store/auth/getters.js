export default {
  loggedIn(state) {
    return state.isLoggedIn
  },
  loggedInUser(state) {
    return state.loggedInUser
  },
  fetcUserType(state) {
    return state.userType
  },
}
