<template>
  <ul :class="$style.list">
    <li :class="$style.submenuContainer">
      <a :class="$style.link">Categories</a>
      <SubMenu :class="$style.submenu" :menu-items="categories" />
    </li>
    <li><a :class="$style.link" href="/">Les mieux notés</a></li>
  </ul>
</template>

<script>
import SubMenu from '../Submenu';

export default {
  name: 'Links',

  components: {
    SubMenu,
  },

  data() {
    return {
      categories: [],
    };
  },

  async fetch() {
    this.categories = await this.$axios.$get(`categories/limit/5`);
  },
};
</script>

<style lang="scss" module>
.list {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-left: 48px;
}

.link {
  display: inline-block;
  padding: 8px;
  border-radius: 8px;

  color: black;
  text-decoration: none;

  transition: 0.3s background-color;

  &:hover {
    background-color: white;
  }
}

.submenuContainer {
  position: relative;

  &:hover {
    .submenu {
      transform: translateY(24px);

      opacity: 1;

      pointer-events: all;
    }
  }

  .link {
    position: relative;

    padding-right: 28px;

    cursor: default;
    &::after {
      position: absolute;
      top: 50%;
      right: 8px;

      display: block;
      width: 12px;
      height: 12px;

      background-image: url('~/assets/icons/arrow-bottom.svg');
      transform: translateY(-50%);

      content: '';
    }
  }
}

.submenu {
  position: absolute;

  transform: translateY(16px);

  opacity: 0;

  transition-duration: 0.3s;
  transition-property: opacity transform;

  pointer-events: none;

  &::before {
    position: absolute;

    width: 100%;
    height: 24px;

    transform: translateY(-100%);

    content: '';
  }
}
</style>
