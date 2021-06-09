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
  padding: 24px;
  border-radius: 8px;

  background-color: $light-grey;

  p {
    margin-top: 10px;

    line-height: 120%;
  }
}
</style>
