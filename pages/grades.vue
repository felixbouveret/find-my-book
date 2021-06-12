<template>
  <Wrapper>
    <GradesModule :module-data="data" />
  </Wrapper>
</template>

<script>
import GradesModule from '~/modules/Grades';
export default {
  components: { GradesModule },
  middleware: 'auth/isNotConnected',

  async asyncData({ $axios }) {
    try {
      const books = await $axios.$get(`books/average/10`);
      const data = books.map(({ average, book }) => ({
        average,
        ...book,
      }));
      return { data };
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
