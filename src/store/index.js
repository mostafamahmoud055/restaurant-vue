import { createStore } from "vuex";

export default createStore({
  state: {
    home: true,
  },
  getters: {
    home(state) {
      return state.home;
    },
  },
  mutations: {
    home(state, isTrue) {
      state.home = isTrue;
    },
  },
  actions: {},
  modules: {},
});
