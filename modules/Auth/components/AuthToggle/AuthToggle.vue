<template>
  <div :class="$style.authToggleContainer">
    <button
      :class="[[$style.menuButton], { [$style.isActive]: !isLoginActive }]"
      @click="$emit('change', false)"
    >
      Register
    </button>
    <button
      :class="[[$style.menuButton], { [$style.isActive]: isLoginActive }]"
      @click="$emit('change', true)"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: 'AuthToggle',

  model: {
    prop: 'isLoginActive',
    event: 'change',
  },

  props: {
    isLoginActive: {
      type: Boolean,
      defautl: false,
    },
  },
};
</script>

<style lang="scss" module>
.authToggleContainer {
  display: flex;
}

.menuButton {
  flex-grow: 1;
  padding: 8px;
  border: 0;
  border-bottom: 2px solid;

  background-color: transparent;

  outline: none;

  &:focus {
    background-color: lightgray;
  }
}
</style>
