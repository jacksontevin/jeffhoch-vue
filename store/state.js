// https://vuex.vuejs.org/en/state.html

const defaultState = {
  // appLogicData: 'bonjours I am module Logic',
  // pokemon: {}
}
const inBrowser = typeof window !== 'undefined'
// if in browser, use pre-fetched state injected by SSR
const state =
  inBrowser && window.__INITIAL_STATE__
    ? window.__INITIAL_STATE__.page
    : defaultState

export default state
