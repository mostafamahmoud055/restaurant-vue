import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
export default createStore({
  state: {
    home: true,
    category: {
      id: "",
      name: "",
    },
    categoryImages: {},
    listOfLocations: [],
    listOfCategories: [],
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
    async listOfCategories(state, payload) {
      let result = await axios.get(
        `http://localhost:3000/categories?userID=${payload.userID}&locationID=${payload.locationID}`
      );
      //get 200
      if (result.status == 200) {
        state.listOfCategories = result.data;
        state.categoryImages = {};
        result.data.forEach((cate, i) => {
          state.categoryImages[`${i}`] = cate.photo;
        });
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
