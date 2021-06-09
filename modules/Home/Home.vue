<template>
  <div :class="$style.homeRoot">
    <Hero />
  </div>
</template>

<script>
import { Hero } from './components';

export default {
  name: 'HomeModule',
  components: {
    Hero,
  },
};
</script>

<style lang="scss" module>
.homeRoot {
  padding-top: 32px;
}
</style>
