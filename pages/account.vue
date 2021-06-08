<template>
  <Account :module-data="data" />
</template>

<script>
import Account from '~/modules/Account';

export default {
  components: { Account },
  middleware: 'auth/isNotConnected',

  async asyncData({ $axios }) {
    try {
      const data = await $axios.$get(`account/all`);

      return { data };
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
