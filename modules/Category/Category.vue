<template>
  <Wrapper>
    <div :class="$style.categoryRoot">
      <ListingCategories
        :categories="allCategoriesData"
        :selected-category="selectedCategory"
      />
      <div :class="$style.booksListing">
        <h1 :class="$style.title" v-if="isCategorySelected">
          Sélectionne une catégorie gros FDP
        </h1>
        <ul :class="$style.booksList">
          <li
            v-for="item in moduleData"
            :key="item.id"
            :class="$style.booksItem"
          >
            <Card :card-data="item" />
          </li>
        </ul>
      </div>
    </div>
  </Wrapper>
</template>

<script>
import { Card } from '../Search/components';
import { ListingCategories } from './components';
export default {
  name: 'CategoryModule',

  components: { ListingCategories, Card },

  props: {
    moduleData: {
      type: Array,
      default: () => [],
    },
    allCategoriesData: {
      type: Array,
      default: () => [],
    },
    selectedCategory: {
      type: String,
      default: '',
    },
  },

  computed: {
    isCategorySelected() {
      return parseInt(this.selectedCategory) === 0;
    },
  },
};
</script>

<style lang="scss" module>
.booksListing {
  margin-top: 32px;
  .title {
    font-size: 32px;
    text-align: center;
  }
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
</style>
