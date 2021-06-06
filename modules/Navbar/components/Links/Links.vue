<template>
  <ul :class="$style.list">
    <li>
      <a :class="$style.link">Categories</a>
      <SubMenu :class="$style.submenu" :menu-items="categories" />
    </li>
    <li><a :class="$style.link" href="">Les mieux notés</a></li>
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
  display: flex;
  gap: 16px;
}

.link {
  display: inline-block;
  padding: 8px;
  border-radius: 8px;

  color: black;
  text-decoration: none;

  &:hover {
    background-color: white;
  }
}

.submenu {
  position: absolute;
}
</style>
