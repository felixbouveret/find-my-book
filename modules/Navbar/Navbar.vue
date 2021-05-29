<template>
  <div :class="$style.navbar">
    <div :class="$style.left">
      <Logo />
      <Links />
    </div>
    <div :class="$style.right">
      <LogLinks />
    </div>
  </div>
</template>

<script>
import { Links, LogLinks } from './components';
import Logo from '~/components/Logo';

export default {
  name: 'NavbarModule',
  components: { Logo, Links, LogLinks },
};
</script>

<style lang="scss" module>
.navbar {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
  }
}
</style>
