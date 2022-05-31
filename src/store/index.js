import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{},
    token:''
  },
  getters: {
  },
  mutations: {
    setUserInfo(state,userInfo){
      state.userInfo = userInfo;
      console.log(userInfo)
    },

    setTtoken(state,token){
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  }
})
