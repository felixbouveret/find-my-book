<template>
  <button :class="$style.button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss" module>
.button {
  padding: 5px;
  border: none;
  border-radius: 2px;

  background-color: #ffbe60;
  box-shadow: gray 0 2px 2px 0;
  a {
    color: black;
  }
}
</style>
