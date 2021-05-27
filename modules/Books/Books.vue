<template>
  <section :class="$style.booksRoot">
    <div :class="$style.container">
      <ul :class="$style.booksList">
        <li v-for="item in moduleData" :key="item.id" :class="$style.booksItem">
          <Single :module-data="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Single from '~/modules/Single';
export default {
  name: 'BooksModule',

  components: { Single },

  props: {
    moduleData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" module>
.booksRoot {
  .container {
    .booksList {
      list-style: none;
    }
  }
}
</style>
