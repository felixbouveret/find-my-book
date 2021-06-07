<template>
  <div :class="$style.homeRoot">
    <Hero />
    <HowItWorks />
  </div>
</template>

<script>
import { Hero, HowItWorks } from './components';

export default {
  name: 'HomeModule',
  components: {
    Hero,
    HowItWorks,
  },
};
</script>

<style lang="scss" module>
.homeRoot {
  padding-top: 32px;
}
</style>
