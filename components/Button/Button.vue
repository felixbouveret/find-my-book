<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss" module></style>
