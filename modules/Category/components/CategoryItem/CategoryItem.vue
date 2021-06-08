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

  background-color: rgb(237, 237, 237);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 100px 80px rgba(0, 0, 0, 0.07);

  a {
    color: black;

    text-decoration: none;
  }

  &.selectedCategory {
    a {
      color: red;
    }
  }
}
</style>
