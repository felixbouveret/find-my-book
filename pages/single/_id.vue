<template>
  <Single :module-data="data" :average="average" />
</template>

<script>
import Single from '~/modules/Single';

export default {
  name: 'SinglePage',
  components: { Single },

  async asyncData({ params, $axios }) {
    try {
      const data = await $axios.$get(`singlebook/${params.id}`);

      const average = await await $axios.$get(
        `singlebook/notes/average/${params.id}`
      );

      return { data, average };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
