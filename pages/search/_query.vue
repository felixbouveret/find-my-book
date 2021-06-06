<template>
  <Wrapper>
    <SearchModule :module-data="data" :search-query="searchQuery" />
  </Wrapper>
</template>

<script>
import SearchModule from '~/modules/Search';
export default {
  components: { SearchModule },
  middleware: 'auth/isNotConnected',

  async asyncData({ params }) {
    const searchQuery = params.query;
    const search = await fetch(
      `http://localhost:8000/books/search/${params.query}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return { data: search, searchQuery };
  },
};
</script>
