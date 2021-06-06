<template>
  <NavbarModule :class="$style.header" />
</template>

<script>
import NavbarModule from '~/modules/Navbar';

export default {
  name: 'Navbar',

  components: {
    NavbarModule,
  },
};
</script>

<style lang="scss" module>
.header {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
}
</style>
