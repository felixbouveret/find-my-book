<template>
  <div :class="$style.cardRoot">
    <div :class="$style.likeButton" @click="addLikeToBook(cardData.book.id)" />
    <img :src="cardData.book.img_url" alt="" />
    <div :class="$style.cardDetails">
      <h2 :class="$style.singleTitle">{{ cardData.book.name }}</h2>
      <p :class="$style.singleAuthor">by {{ cardData.book.auteur }}</p>
      <p :class="$style.singleAverage">Average : {{ cardData.average }}</p>
      <p :class="$style.singleSynopsys">{{ cardData.book.synopsis }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    ...mapActions('user', ['addLikeToBook']),
  },
};
</script>

<style lang="scss" module>
.cardRoot {
  position: relative;

  display: flex;

  width: 500px;
  height: 300px;
  padding: 24px;
  border-radius: 5px;

  background-color: #f3f3f3;

  .likeButton {
    position: absolute;
    top: -50px;
    left: -45px;

    padding: 24px;

    border-radius: 1000px;

    background-color: $red;
    transform: scale(0.6);

    content: url('~/assets/img/heart.svg');

    &:hover {
      background-color: rgba($color: $red, $alpha: 0.7);
    }
  }

  .cardDetails {
    margin-left: 24px;
    .singleTitle {
      font-size: 20px;
    }
    .singleAuthor,
    .singleSynopsys,
    .singleAverage {
      margin-top: 10px;
    }
    .singleSynopsys {
      display: -webkit-box;
      max-height: 200px;
      overflow: hidden;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
