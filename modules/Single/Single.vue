<template>
  <section class="singleRoot">
    <div class="container">
      <div class="singleCard">
        <h1 class="singleTitle">Name : {{ moduleData.name }}</h1>
        <h2 class="singleAuthor">Author : {{ moduleData.auteur }}</h2>
        <p class="singleIsbn">ISBN : {{ moduleData.isbn_code }}</p>
        <p class="singleSynopsis">Synopsis : {{ moduleData.synopsis }}</p>
        <p class="singleAverage">Average : {{ average.average }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SingleModule',

  props: {
    moduleData: {
      type: Object,
      default: () => {},
    },
    average: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
.singleRoot {
  .container {
    .singleCard {
    }
  }
}
</style>
