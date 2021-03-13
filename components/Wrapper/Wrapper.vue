<template>
  <div :class="$style.inner">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
};
</script>

<style lang="scss" module>
.inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
