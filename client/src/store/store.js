import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'PicIt',
    isLoggedIn: false,
  },
  mutations: {
    SET_LOGGED_IN: (state, payload) => {
        state.isLoggedIn = payload;
    }
  },
  actons: {

  }
})