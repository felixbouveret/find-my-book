<template>
  <form @submit.stop.prevent="getSearchResult">
    <input v-model="searchQuery" type="text" :class="$style.searchBarRoot" />
  </form>
</template>

<script>
export default {
  name: 'SearchBar',

  data() {
    const searchQuery = '';

    return { searchQuery };
  },

  methods: {
    getSearchResult() {
      fetch(`http://localhost:8000/books/search/${this.searchQuery}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss" module>
.searchBarRoot {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
