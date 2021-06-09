<template>
  <div :class="$style.container">
    <ul :class="$style.commentaryList">
      <AddCommentary :book-id="bookId" />
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
import AddCommentary from '../AddCommentary';
export default {
  name: 'CommentaryListing',

  components: { CommentaryItem, AddCommentary },

  props: {
    moduleData: {
      type: Array,
      default: () => [],
    },
    bookId: {
      type: Number,
      default: 0,
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
