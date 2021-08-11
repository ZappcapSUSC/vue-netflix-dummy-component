const state = () => ({
  modalOpened: false,
});

// getters
const getters = {
  isModalOpened: (state) => state.modalOpened,
};

// actions
const actions = {
  modalOpenedSet: ({ commit }, isModalOpened) => {
    commit("modalOpenedSet", isModalOpened);
  },
};

// mutations
const mutations = {
  modalOpenedSet: (state, isModalOpened) => {
    state.modalOpened = isModalOpened;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
