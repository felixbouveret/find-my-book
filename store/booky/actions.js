export default {
  setSelectedCategories({ commit }, payload) {
    commit('SET_SELECTED_CATEGORIES', payload);
  },

  setSelectedBooks({ commit }, payload) {
    commit('SET_SELECTED_BOOKS', payload);
  },
};
