const state = () => ({
  movies: {
    "1a": {
      id: "1a",
      name: "Fear Street Part Three: 1666",
      genres: ["Mystery", "Horror", "Suspense"],
      thumbnailId: "dummycover.jpg",
      hoverId: "@/assets/img/dummyhover.jpg",
      modalId: "@/assets/img/dummymodal.jpg",
      classification: "TV-14",
      matchRate: "98%",
      length: "2 h 19 min",
      liked: null,
      description: "Classic 80's slasher horror movie with some moder topics.",
      cast: [
        "Kiana Madeira",
        "Ashley Zukerman",
        "Gillian Jacobs",
        "Olivia Scott Welch",
      ],
      seasons: 3,
      maxResolution: "hd",
    },
  },
  selectedMovieId: null,
  modalMovieId: null,
});

// getters
const getters = {
  moviesList: (state) => state.movies,
  selectedMovieId: (state) => state.selectedMovieId,
  selectedMovie: (state) =>
    state.selectedMovieId ? state.movies[state.selectedMovieId] : null,
  selectedMovieModal: (state) =>
    state.modalMovieId ? state.movies[state.modalMovieId] : null,
  selectedMovieGenres: (state, getters) => getters.selectedMovie?.genres,
  selectedMovieLiked: (state, getters) =>
    getters.selectedMovie
      ? getters.selectedMovie.liked
      : getters.selectedMovieModal
      ? getters.selectedMovieModal.liked
      : null,
  selectedMovieMatchRate: (state, getters) => getters.selectedMovie?.matchRate,
};

// actions
const actions = {
  selectMovie: ({ commit }, id) => {
    commit("slectedMovieIdSet", id);
  },
  likeSelectedMovie: ({ commit, getters }) => {
    if (!getters["selectedMovieLiked"]) {
      commit("updateMoviesObject", { liked: true });
      //Send decision with post to BE
    } else {
      commit("updateMoviesObject", { liked: null });
    }
  },
  dislikeSelectedMovie: ({ commit, getters }) => {
    if (
      getters["selectedMovieLiked"] ||
      getters["selectedMovieLiked"] === null
    ) {
      commit("updateMoviesObject", { liked: false });
      //Send decision with post to BE
    } else {
      commit("updateMoviesObject", { liked: null });
      //Send decision with post to BE
    }
  },
  playSelectedMovie: ({ getters }) => {
    console.log(
      `Playing movie: ${
        getters["selectedMovie"]?.name || getters["selectedMovieModal"]?.name
      }`
    );
    //Here should do some routing and API call with BE
  },
  modalMovieIdSet: ({ commit }, id) => {
    commit("modalMovieIdSet", id);
  },
};

// mutations
const mutations = {
  moviesSet: (state, moviesArray) => {
    state.movies = moviesArray;
  },
  slectedMovieIdSet: (state, id) => {
    state.selectedMovieId = id;
  },
  updateMoviesObject: (state, toSet) => {
    state.selectedMovieId
      ? Object.assign(state.movies[state.selectedMovieId], toSet)
      : state.modalMovieId
      ? Object.assign(state.movies[state.modalMovieId], toSet)
      : null;
  },
  modalMovieIdSet: (state, id) => {
    state.modalMovieId = id;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
