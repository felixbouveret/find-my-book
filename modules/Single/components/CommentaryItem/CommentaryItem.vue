<template>
  <li :class="$style.commentaryItem">
    <h3>Utilisateur : {{ commentary.user.username }}</h3>
    <p>{{ commentary.content }}</p>
  </li>
</template>

<script>
export default {
  name: 'CommentaryItem',

  props: {
    commentary: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" module>
.commentaryItem {
  margin-top: 12px;
  padding: 16px;
  border-radius: 8px;

  background-color: #c4c4c4;

  p {
    margin-top: 10px;
  }
}
</style>
