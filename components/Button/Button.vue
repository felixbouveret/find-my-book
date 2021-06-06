<template>
  <a v-if="href" :href="href" :class="$style.button" @click="$emit('click')">
    <slot />
  </a>
  <button v-else :class="$style.button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
.button {
  padding: 12px;
  border: none;
  border-radius: 8px;

  color: white;

  font-size: 16px;
  text-decoration: none;

  background-color: black;
  cursor: pointer;
}
</style>
