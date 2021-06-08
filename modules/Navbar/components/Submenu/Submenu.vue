<template>
  <ul :class="$style.container">
    <li
      v-for="({ label, id }, index) in menuItems"
      :key="index"
      :class="$style.item"
    >
      <a :href="`category?c=${id}`">
        {{ label }}
      </a>
    </li>
    <li :class="$style.item">
      <a href="category"> Voir tout </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Links',

  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 24px;
  border-radius: 8px;

  background-color: #c4c4c4;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
}

.item {
  display: block;

  a {
    display: block;
    padding: 16px;
    border-radius: 8px;

    background-color: #e9e9e9;
  }
}
</style>
