import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
export default createStore({
  state: {
    home: true,
    listOfLocations: [],
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
    async listOfLocations(state, payload) {
      let result = await axios.get(
        `http://localhost:3000/Locations?userID=${payload.userID}`
      );
      //get 200
      if (result.status == 200) {
        state.listOfLocations = result.data;
      }
    },
    async middlewareLocations(state, payload) {
      let result = await axios.get(
        `http://localhost:3000/Locations?id=${payload.id}&userID=${payload.userID}`
      );

      //get 200
      if (result.status == 200 && result.data.length == 0) {
        router.push("/");
      }
    },
  },
  actions: {},
  modules: {},
});
