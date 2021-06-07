<template>
  <Books :module-data="data" />
</template>

<script>
import Books from '~/modules/Books';

export default {
  components: { Books },
  middleware: 'auth/isNotConnected',

  async asyncData({ $axios }) {
    try {
      const data = await $axios.$get(`books/all`);

      return { data };
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
