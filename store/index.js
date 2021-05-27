import Vuex from 'vuex';
import user from './user';

export default () => {
  return new Vuex.Store({
    actions: {
      nuxtServerInit({ dispatch }) {
        const auth = this.$cookies.get('auth');
        if (auth) {
          this.$axios.setToken(auth.token, 'Bearer');
          dispatch('user/connectUser');
        }
      },
    },
    modules: {
      user,
    },
  });
};
