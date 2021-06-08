<template>
  <li
    :class="[
      $style.categoryItem,
      { [$style.selectedCategory]: setSelectedCategory },
    ]"
  >
    <a :href="'category?c=' + id">
      {{ label }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'CategoryItem',

  props: {
    label: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
    selectedCategory: {
      type: String,
      default: '',
    },
  },

  computed: {
    setSelectedCategory() {
      return parseInt(this.selectedCategory) === this.id;
    },
  },
};
</script>

<style lang="scss" module>
.categoryItem {
  margin: 4px;
  padding: 8px 12px;

  border-radius: 5px;

  background-color: grey;

  a {
    color: white;

    text-decoration: white;
  }

  &.selectedCategory {
    a {
      color: red;
    }
  }
}
</style>
