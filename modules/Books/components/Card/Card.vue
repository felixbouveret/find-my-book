<template>
  <a :class="$style.cardContainer" :href="'/books/' + cardData.id">
    <img :class="$style.img" :src="cardData.img_url" alt="" />
    <h2 :class="$style.singleTitle">Name : {{ cardData.name }}</h2>
    <p :class="$style.singleAuthor">Author : {{ cardData.auteur }}</p>
    <p :class="$style.singleIsbn">ISBN : {{ cardData.isbn_code }}</p>
    <!-- <p class="singleAverage">Average : {{ average.average }}</p> -->
  </a>
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
.cardContainer {
  display: block;
  padding: 24px;
}

.img {
  width: 100%;
}
</style>
