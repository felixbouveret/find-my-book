<template>
  <div :class="$style.container">
    <ul :class="$style.commentaryList">
      <CommentaryItem
        v-for="(item, index) in moduleData"
        :key="index"
        :commentary="item"
      />
    </ul>
  </div>
</template>

<script>
import CommentaryItem from '../CommentaryItem';
export default {
  name: 'CommentaryListing',

  components: { CommentaryItem },

  props: {
    moduleData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" module>
.container {
  width: 100%;
  margin-top: 8px;
}
</style>
