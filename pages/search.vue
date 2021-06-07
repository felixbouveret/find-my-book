<template>
  <Wrapper>
    <SearchModule :module-data="data" :search-query="search" />
  </Wrapper>
</template>

<script>
import SearchModule from '~/modules/Search';
export default {
  name: 'SearchPage',

  components: { SearchModule },

  middleware: 'auth/isNotConnected',

  async asyncData({ query: { s: search }, $axios }) {
    try {
      const data = await $axios.$get(`books/search/${search}`);

      return { data, search };
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
