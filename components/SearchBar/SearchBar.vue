<template>
  <form @submit.stop.prevent="getSearchResult">
    <input
      v-model="searchQuery"
      type="text"
      :class="$style.searchBarRoot"
      :placeholder="placeholder"
    />
  </form>
</template>

<script>
export default {
  name: 'SearchBar',

  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      searchQuery: null,
    };
  },

  methods: {
    getSearchResult() {
      this.$axios
        .$post(`books/search/${this.searchQuery}`)
        .then((res) => {
          this.$emit('onSearch', { res, searchQuery: this.searchQuery });
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss" module>
.searchBarRoot {
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  border: solid 2px $light-grey;

  border-radius: 8px;
}
</style>
