<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href ? href : null"
    :class="[
      $style.button,
      {
        [$style.isLight]: isLight,
        [$style.isDisabled]: isDisabled,
        [$style.isLoading]: isLoading,
      },
    ]"
    @click="$emit('click')"
  >
    <span :class="$style.content">
      <slot />
    </span>
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
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
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

  background-color: $red;
  cursor: pointer;

  &:hover {
    background-color: rgba($color: $red, $alpha: 0.6);
  }
}

.isLight {
  border: solid 2px $red;

  color: $red;

  background-color: white;

  &:hover {
    color: white;

    background-color: $red;
  }
}
.isDisabled {
  color: white;

  background-color: rgba($color: $red, $alpha: 0.5);
  cursor: default;

  &:hover {
    background-color: rgba($color: $red, $alpha: 0.5);
  }
}

.isLoading {
  position: relative;

  .content {
    opacity: 0;
  }
  &::after :global {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 24px;
    height: 24px;
    border: solid 2px white;
    border-bottom-color: transparent;
    border-radius: 16px;

    transform: translate(-50%, -50%);

    animation: loading 1s infinite linear;

    content: '';
  }
}

@keyframes :global(loading) {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
