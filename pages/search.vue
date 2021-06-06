<template>
  <Wrapper>
    <SearchModule :module-data="data" :search-query="s" />
  </Wrapper>
</template>

<script>
import SearchModule from '~/modules/Search';
export default {
  components: { SearchModule },
  middleware: 'auth/isNotConnected',

  async asyncData({ query: { s } }) {
    const search = await fetch(`http://localhost:8000/books/search/${s}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return { data: search, s };
  },
};
</script>
