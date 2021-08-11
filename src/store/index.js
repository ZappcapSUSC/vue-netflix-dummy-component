import { createStore } from "vuex";
import movieCard from "./modules/movieCard";
import movies from "./modules/movies";

export default createStore({
  state: {
    scrimState: false,
  },
  mutations: {
    appScrimSet: (state, scrimState) => {
      state.scrimState = scrimState;
    },
  },
  actions: {
    appScrimSet: ({ commit }, scrimState) => {
      commit("appScrimSet", scrimState);
    },
  },
  getters: {
    appIsScrimOpen: (state) => state.scrimState,
  },
  modules: { movieCard, movies },
});
