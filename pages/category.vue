<template>
  <CategoryModule
    :module-data="data"
    :all-categories-data="allCategories"
    :selected-category="selectedCategory"
  />
</template>

<script>
import CategoryModule from '~/modules/Category';
export default {
  name: 'CategoryPage',

  components: { CategoryModule },

  middleware: 'auth/isNotConnected',

  async asyncData({ query: { c: category }, $axios }) {
    if (category !== undefined) {
      try {
        const data = await $axios.$get(`categories/${category}/books`);
        const allCategories = await $axios.$get(`categories/all`);
        const selectedCategory = category;

        return { data, allCategories, selectedCategory };
      } catch (error) {
        console.error(error);
      }
    } else {
      const data = [];
      const allCategories = await $axios.$get(`categories/all`);
      const selectedCategory = '0';
      return { data, allCategories, selectedCategory };
    }
  },
};
</script>
