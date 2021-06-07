<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href ? href : null"
    :class="[
      $style.button,
      {
        [$style.isLight]: isLight,
      },
    ]"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Button',

  props: {
    href: {
      type: String,
      default: '',
    },
    isLight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.button {
  display: block;
  padding: 12px;
  border: none;
  border-radius: 8px;

  color: white;

  font-size: 16px;
  text-align: center;
  text-decoration: none;

  background-color: black;
  cursor: pointer;
}

.isLight {
  border: solid 2px black;

  color: black;

  background-color: white;
}
</style>
