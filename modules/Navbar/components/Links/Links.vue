<template>
  <ul :class="$style.list">
    <li>
      Categories
      <SubMenu :menu-items="categories" />
    </li>
  </ul>
</template>

<script>
import SubMenu from '../Submenu';
import { getCategories } from './Categories';

export default {
  name: 'Links',

  components: {
    SubMenu,
  },

  data() {
    const CATEGORIES = getCategories();

    return {
      categories: CATEGORIES,
    };
  },
};
</script>

<style lang="scss" module>
.list {
  li {
    line-height: 50px;

    list-style: none;
  }
}
</style>
