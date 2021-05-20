/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
// import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Vuex from 'vuex'

// Store functionality
// import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
// Modules functionality
import authModule from './auth/index'
import notificationModule from './notification/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// Create a new store
const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: authModule,
      notification: notificationModule,
    },
    actions,
    getters,
    mutations,
    state,
    plugins: debug ? [] : [], // createLogger() createPersistedState() set logger only for development
  })
}

export default createStore
