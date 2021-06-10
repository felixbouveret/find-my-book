<template>
  <ul :class="$style.list">
    <li :class="$style.submenuContainer">
      <a :class="$style.link">Categories</a>
      <SubMenu :class="$style.submenu" :menu-items="categories" />
    </li>
    <li><a :class="$style.link" href="/grades">Les mieux notés</a></li>
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
    try {
      this.categories = await this.$axios.$get(`categories/limit/5`);
    } catch (error) {
      console.log(error);
    }
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
  position: relative;

  display: inline-block;
  padding: 8px;
  border-radius: 8px;

  color: black;
  text-decoration: none;

  transition: 0.3s background-color;

  &:hover {
    &:before {
      width: 100%;
    }
  }

  &:before {
    position: absolute;

    bottom: -5px;
    left: 0;

    width: 0;
    height: 3px;

    background-color: $red;

    transition: width 0.2s ease-in-out;

    content: '';
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
    top: 0;

    width: 100%;
    height: 24px;

    transform: translateY(-100%);

    content: '';
  }
}
</style>
