import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn:false,
    token:''
  },
  mutations: {
    saveToken(state,input){
      state.token = input
    }
  },
  actions: {
  },
  modules: {
  }
})
