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
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;

  background-color: #c4c4c4;
}

.left {
  display: flex;
}
</style>
