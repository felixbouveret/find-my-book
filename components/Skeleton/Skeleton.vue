<template>
  <div :class="$style.container"></div>
</template>

<script>
export default {
  name: 'Skeleton',
};
</script>

<style lang="scss" module>
.container {
  position: relative;

  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;

  background-color: rgba($color: $light-grey, $alpha: 1);

  &::before :global {
    position: absolute;
    top: 0;
    left: -150px;

    display: block;
    width: 150px;
    height: 100%;

    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );

    animation: load 1s ease infinite;

    content: '';
  }
}

@keyframes :global(load) {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}
</style>
