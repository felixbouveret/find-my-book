<template>
  <div :class="$style.container">
    <Skeleton :class="$style.view" />
    <div :class="$style.content">
      <Skeleton :class="$style.title" />
      <Skeleton :class="$style.author" />
      <Skeleton :class="$style.actions" />
    </div>
  </div>
</template>

<script>
import Skeleton from '~/components/Skeleton';

export default {
  name: 'BookCardSkeleton',

  components: {
    Skeleton,
  },
};
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
}

.view {
  flex-grow: 1;
  min-height: 300px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > * {
    height: 20px;
  }
}

.title {
  width: 80%;
}

.author {
  width: 60%;
}

.actions {
  width: 100%;
}
</style>
