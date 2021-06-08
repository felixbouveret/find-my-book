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
      <div v-if="categoryId" :class="$style.booksListing">
        <ul v-if="!isLoading" :class="$style.booksList">
          <li v-for="item in bookList" :key="item.id" :class="$style.booksItem">
            <Card :card-data="item" />
          </li>
        </ul>
        <Squeleton v-else />
      </div>
      <div v-else :class="$style.waitingSearch">
        <h2 :class="$style.secondTitle">Sélectionne une catégorie gros FDP</h2>

        <div :class="$style.searchIcon">
          <SearchIcon />
        </div>
      </div>
    </Wrapper>
  </section>
</template>

<script>
import { ListingCategories } from './components';
import Card from '~/components/Card';
import Squeleton from '~/components/Squeleton';
import SearchIcon from '~/assets/icons/search.svg?inline';

export default {
  name: 'CategoryModule',

  components: { ListingCategories, Card, SearchIcon, Squeleton },

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
  margin-top: 48px;
}

.booksListing {
  margin-top: 32px;
}

.title {
  font-size: 32px;
  line-height: 38px;
  text-align: center;
}

.categoryList {
  margin-top: 32px;
  padding: 24px;
  border-radius: 8px;

  background-color: rgba($color: #fafafa, $alpha: 1);
}

.booksList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

  li {
    margin: 32px;
  }
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

  background-color: rgba($color: #f2f2f2, $alpha: 1);

  svg {
    fill: rgba($color: #b1b1b1, $alpha: 1);
  }
}
</style>
