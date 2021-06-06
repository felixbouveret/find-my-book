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
  data() {
    console.log(this.cardData);
    return {};
  },
};
</script>

<style lang="scss" module>
.cardRoot {
  display: flex;

  width: 500px;
  height: 300px;
  padding: 24px;
  border-radius: 5px;

  background-color: #f3f3f3;

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
      -webkit-line-clamp: 10;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
