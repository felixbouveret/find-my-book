<template>
  <form :class="$style.formCommentary" @submit.stop.prevent="postCommentary">
    <textarea
      id="commentary"
      v-model="commentary"
      name="commentary"
      cols="30"
      rows="10"
    >
    </textarea>
    <button type="submit">Poster le commentaire</button>
  </form>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'AddCommentary',

  props: {
    bookId: {
      type: Number,
      default: 0,
    },
  },

  data() {
    const commentary = '';
    return { commentary };
  },

  computed: {
    ...mapState('user', ['connected', 'userId']),
  },

  methods: {
    postCommentary() {
      console.log(this.userId, this.bookId);
      this.$axios
        .$post(`/singlebook/commentary`, {
          commentary: this.commentary,
          userId: this.userId,
          bookId: this.bookId,
        })
        .then((res) => {
          this.$toast.show(res.message);
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss" module>
.formCommentary {
  display: flex;
  flex-direction: column;

  button {
    margin-top: 16px;
  }
}
</style>
