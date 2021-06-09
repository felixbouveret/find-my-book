<template>
  <!--<Account :user-email="email" /> -->
  <div></div>
</template>

<script>
import { mapState } from 'vuex';
// import Account from '~/modules/Account';

export default {
  // components: { Account },
  middleware: 'auth/isNotConnected',

  computed: {
    ...mapState('user', ['connected', 'userId']),
  },

  // async asyncData({ $axios }) {
  //   try {
  //     console.log(this.userId);
  //     const email = await $axios.$get(`/user/email/${userId}`);
  //     return { email };
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
};
</script>
