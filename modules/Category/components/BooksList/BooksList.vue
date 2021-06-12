<template>
  <div :class="$style.booksListing">
    <ul v-if="!isLoading" :class="$style.booksList">
      <li
        v-for="{ auteur, id, img_url, name } in bookList"
        :key="id"
        :class="$style.bookItem"
      >
        <BookCard
          :id="id"
          :author="auteur"
          :thumbnail="img_url"
          :title="name"
        />
      </li>
    </ul>
    <div v-else :class="$style.booksList">
      <BookCardSkeleton v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import BookCard from '~/components/BookCard';
import BookCardSkeleton from '~/components/BookCardSkeleton';

export default {
  name: 'BookList',

  components: {
    BookCard,
    BookCardSkeleton,
  },

  props: {
    bookList: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
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
