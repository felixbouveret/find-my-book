export default {
  SET_SELECTED_CATEGORIES(state, categories) {
    state.selectedCategories = categories;
  },

  RESET_SELECTED_CATEGORIES(state) {
    state.selectedCategories = [];
  },

  SET_SELECTED_BOOKS(state, books) {
    state.selectedBooks = books;
  },

  RESET_SELECTED_BOOKS(state) {
    state.selectedBooks = [];
  },
};
