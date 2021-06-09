<template>
  <div :class="$style.container">
    <ul>
      <li
        v-for="{ label, id } in categories"
        :key="id"
        :class="[
          $style.categoryItem,
          { [$style.selectedCategory]: id === selectedCategory },
        ]"
        @click="$emit('set-category', id)"
      >
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListingCategories',

  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    selectedCategory: {
      type: Number,
      required: true,
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
    gap: 12px;
    align-items: center;
    justify-content: center;
  }
}

.categoryItem {
  position: relative;

  display: block;
  padding: 8px 12px;
  border-radius: 8px;

  color: black;

  text-decoration: none;

  cursor: pointer;

  transition: background-color 0.3s;

  &:before {
    position: absolute;

    bottom: -5px;
    left: 0;

    width: 0%;
    height: 3px;

    background-color: $red;

    transition: width 0.2s ease-in-out;

    content: '';
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }

  &.selectedCategory {
    position: relative;

    &:before {
      position: absolute;

      bottom: -5px;
      left: 0;

      width: 100%;
      height: 3px;

      background-color: $red;

      transition: width 0.2s ease-in-out;

      content: '';
    }
  }
}
</style>
