export default {
  connectUser({ commit }, { userId, username }) {
    commit('SET_USER_ID', userId);
    commit('SET_USERNAME', username);
    commit('SET_CONNECTION', true);
    const cookiesOptions = {
      path: '/',
      maxAge: 3600,
    };
    const payload = {
      username,
      userId,
    };
    this.$cookies.set('user', payload, cookiesOptions);
  },

  disconnectUser({ commit }) {
    this.$cookies.remove('auth');
    this.$cookies.remove('user');
    this.$axios.setToken(false);
    commit('SET_USER_ID', null);
    commit('SET_USERNAME', null);
    commit('SET_CONNECTION', false);
    this.$router.push('/auth/login');
  },
};
