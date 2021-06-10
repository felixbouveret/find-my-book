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
      const grades = await $axios.$get(`books/average/10`);
      return { data: grades };
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
