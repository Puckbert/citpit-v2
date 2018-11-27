import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'PicIt',
    isLoggedIn: false,
    user:{

    }
  },
  mutations: {
    SET_LOGGED_IN: (state, payload) => {
      state.isLoggedIn = payload;
    },
    SET_USER: (state, payload) => {
      state.user = payload;
    },
    CLEAR_USER: (state) => {
      Object.keys(state.user).forEach(k => delete state.user[k]);
    }
  },
  actons: {

  }
})