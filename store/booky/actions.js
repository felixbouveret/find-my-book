export default {
  setSelectedCategories({ commit }, payload) {
    commit('SET_SELECTED_CATEGORIES', payload);
    commit('RESET_SELECTED_BOOKS');
  },

  setSelectedBooks({ commit }, payload) {
    commit('SET_SELECTED_BOOKS', payload);
  },
};
