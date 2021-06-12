<template>
  <section :class="$style.booksRoot">
    <div :class="$style.container">
      <ul :class="$style.booksList">
        <li
          v-for="{ auteur, id, img_url, name } in moduleData"
          :key="id"
          :class="$style.booksItem"
        >
          <BookCard
            :id="id"
            :author="auteur"
            :thumbnail="img_url"
            :title="name"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import BookCard from '~/components/BookCard';

export default {
  name: 'BooksModule',

  components: { BookCard },

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 64px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 780px;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1000px;
  }
}
</style>
