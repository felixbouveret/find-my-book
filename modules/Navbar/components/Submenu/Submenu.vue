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
      <a href="/category"> Voir tout </a>
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
  align-items: center;
  justify-items: flex-start;
  padding: 24px;
  border-radius: 8px;

  background-color: $light-grey;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
}

.item {
  display: block;

  a {
    position: relative;

    display: block;
    padding: 16px;
    border-radius: 8px;

    color: black;
    text-decoration: black;

    &:before {
      position: absolute;
      top: 0;
      left: 0;

      width: 3px;
      height: 0;

      background-color: $red;

      transition: height 0.2s ease-in-out;

      content: '';
    }

    &:hover {
      &:before {
        height: 100%;
      }
    }
  }
}
</style>
