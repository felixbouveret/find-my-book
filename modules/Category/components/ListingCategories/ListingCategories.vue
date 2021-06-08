<template>
  <div :class="$style.container">
    <ul>
      <CategoryItem
        v-for="({ label, id }, index) in categories"
        :id="id"
        :key="index"
        :class="$style.item"
        :label="label"
        :selected-category="selectedCategory"
      />
    </ul>
  </div>
</template>

<script>
import CategoryItem from '../CategoryItem';
export default {
  name: 'ListingCategories',

  components: { CategoryItem },

  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    selectedCategory: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
.container {
  width: 100%;
  margin-top: 8px;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
