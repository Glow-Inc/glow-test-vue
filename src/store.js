import Vue from "vue";
import Vuex from "vuex";
import { MOVIES } from "@/data/movies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    allMovies: () => MOVIES
  },
  mutations: {},
  actions: {}
});
