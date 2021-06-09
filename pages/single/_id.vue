<template>
  <Single :module-data="data" :average="average" :commentary="commentary" />
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

      const commentary = await await $axios.$get(
        `singlebook/commentary/${params.id}`
      );

      return { data, average, commentary };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
