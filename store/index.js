import Vuex from 'vuex';
import user from './user';

export default () => {
  return new Vuex.Store({
    actions: {
      nuxtServerInit({ dispatch }) {
        const auth = this.$cookies.get('auth');
        const user = this.$cookies.get('user');
        if (auth && user) {
          this.$axios.setToken(auth.token, 'Bearer');
          dispatch('user/connectUser', { ...user });
        } else {
          dispatch('user/disconnectUser');
        }
      },
    },
    modules: {
      user,
    },
  });
};
