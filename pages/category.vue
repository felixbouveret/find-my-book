<template>
  <CategoryModule
    :all-categories-data="allCategories"
    :selected-category="categoryId"
  />
</template>

<script>
import CategoryModule from '~/modules/Category';
export default {
  name: 'CategoryPage',

  components: { CategoryModule },

  middleware: 'auth/isNotConnected',

  async asyncData({ query: { c: categoryId }, $axios }) {
    try {
      const allCategories = await $axios.$get(`categories/all`);
      categoryId = categoryId ? parseInt(categoryId) : 0;

      return { allCategories, categoryId };
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
