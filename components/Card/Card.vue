<template>
  <div :class="$style.cardRoot">
    <img :src="cardData.img_url" alt="" />
    <div :class="$style.cardDetails">
      <h2 :class="$style.singleTitle">{{ cardData.name }}</h2>
      <p :class="$style.singleAuthor">by {{ cardData.auteur }}</p>
      <p :class="$style.singleSynopsys">{{ cardData.synopsis }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
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

  &:before {
    position: absolute;
    top: -50px;
    left: -45px;

    padding: 24px;

    border-radius: 1000px;

    background-color: #ff007a;
    transform: scale(0.6);

    content: url('~/assets/img/book.svg');
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
</style>
