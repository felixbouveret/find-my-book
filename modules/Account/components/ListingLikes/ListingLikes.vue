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
  name: 'ListingLikes',

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
  display: block;
  padding: 8px 12px;
  border-radius: 8px;

  color: black;

  text-decoration: none;

  background-color: rgb(237, 237, 237);
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(203, 203, 203);
  }

  &.selectedCategory {
    border: solid 2px black;
  }
}
</style>
