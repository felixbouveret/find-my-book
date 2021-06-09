<template>
  <div :class="$style.cardRoot">
    <a :href="`/single/${cardData.id}`">
      <div :class="$style.likeButton" @click="addLikeToBook(cardData.id)" />
      <img :src="cardData.img_url" alt="" />
      <div :class="$style.cardDetails">
        <h2 :class="$style.singleTitle">{{ cardData.name }}</h2>
        <p :class="$style.singleAuthor">by {{ cardData.auteur }}</p>
        <p :class="$style.singleSynopsys">{{ cardData.synopsis }}</p>
      </div>
    </a>
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
  a {
    position: relative;

    display: flex;

    width: 500px;
    height: 300px;
    padding: 24px;
    border-radius: 5px;

    color: unset;
    text-decoration: none;

    background-color: #f3f3f3;

    .likeButton {
      position: absolute;
      top: -50px;
      left: -45px;

      padding: 24px;

      border-radius: 1000px;

      background-color: #ff007a;
      transform: scale(0.6);

      content: url('~/assets/img/heart.svg');

      &:hover {
        background-color: rgba($color: #ff007a, $alpha: 0.7);
      }
    }

    .cardDetails {
      margin-left: 24px;
      .singleTitle {
        font-size: 14px;
      }
      .singleAuthor,
      .singleSynopsys {
        margin-top: 10px;
      }
      .singleSynopsys {
        display: -webkit-box;
        max-height: 200px;
        overflow: hidden;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
