<template>
  <section :class="$style.categoryRoot">
    <Wrapper>
      <h1 :class="$style.title">
        Trouve des livres en fonction des catégories qui te plaisent
      </h1>
      <ListingCategories
        :class="$style.categoryList"
        :categories="allCategoriesData"
        :selected-category="categoryId"
        @set-category="categoryId = $event"
      />
      <BooksList
        v-if="categoryId"
        :book-list="bookList"
        :is-loading="isLoading"
      />
      <div v-else :class="$style.waitingSearch">
        <h2 :class="$style.secondTitle">Sélectionne une catégorie stp ^^</h2>

        <div :class="$style.searchIcon">
          <SearchIcon />
        </div>
      </div>
    </Wrapper>
  </section>
</template>

<script>
import { ListingCategories, BooksList } from './components';
import SearchIcon from '~/assets/icons/search.svg?inline';

export default {
  name: 'CategoryModule',

  components: {
    ListingCategories,
    SearchIcon,
    BooksList,
  },

  props: {
    allCategoriesData: {
      type: Array,
      default: () => [],
    },
    selectedCategory: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      bookList: [],
      categoryId: this.selectedCategory,
      isLoading: false,
    };
  },

  async fetch() {
    if (this.selectedCategory) await this.getBooks();
  },

  computed: {
    isCategorySelected() {
      return this.categoryId;
    },
  },

  watch: {
    categoryId() {
      this.getBooks();
    },
  },

  methods: {
    async getBooks() {
      this.isLoading = true;
      this.bookList = await this.$axios.$get(
        `/categories/${this.categoryId}/books`
      );

      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" module>
.categoryRoot {
  margin: 64px 0 80px;
}

.booksListing {
  margin-top: 32px;
}

.title {
  max-width: 600px;
  margin: 16px auto 0 auto;

  font-size: 32px;
  line-height: 38px;
  text-align: center;
}

.categoryList {
  margin-top: 48px;
  padding: 24px;
  border-radius: 8px;

  background-color: rgba($color: $red, $alpha: 0.2);
}

.waitingSearch {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin: auto;
  margin-top: 64px;
}

.secondTitle {
  color: #b1b1b1;
}

.searchIcon {
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 48px;

  background-color: rgba($color: $red, $alpha: 0.2);

  svg {
    fill: rgba($color: $red, $alpha: 0.5);
  }
}
</style>
