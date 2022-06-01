import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    token: '',
    // 记录页面刷新时的操作状态
    isSecond: '',
    routerName: '',
    asideWidth: '',
    routerSecondData: [],
  },
  getters: {
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },

    setTtoken(state, token) {
      state.token = token
    },

    setIsSecond(state, isSecond) {
      state.isSecond = isSecond
    },

    setRouterName(state, routerName) {
      state.routerName = routerName
    },

    setAsideWidth(state, asideWidth) {
      state.asideWidth = asideWidth
    },

    setRouterSecondData(state, routerSecondData) {
      state.routerSecondData = routerSecondData
    },
  },
  actions: {
  },
  modules: {
  }
})
