<template>
  <section :class="$style.booksRoot">
    <div :class="$style.container">
      <ul :class="$style.booksList">
        <li v-for="item in moduleData" :key="item.id" :class="$style.booksItem">
          <Card :card-data="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { Card } from './components';

export default {
  name: 'BooksModule',

  components: { Card },

  props: {
    moduleData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" module>
.booksList {
  display: flex;
  flex-wrap: wrap;

  list-style: none;
}

.booksItem {
  width: 33%;
}
</style>
