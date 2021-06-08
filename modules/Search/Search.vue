<template>
  <section :class="$style.searchRoot">
    <div :class="$style.container">
      <div :class="$style.searchHeader">
        <h1>Résultats de la recherche pour : {{ searchName }}</h1>
      </div>
      <div :class="$style.searchResults">
        <ul :class="$style.searchList">
          <li
            v-for="item in moduleData"
            :key="item.id"
            :class="$style.searchItem"
          >
            <Card :card-data="item" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card';

export default {
  name: 'SearchModule',
  components: { Card },

  props: {
    moduleData: {
      type: Array,
      default: () => [],
    },
    searchQuery: {
      type: String,
      default: '',
    },
  },

  data() {
    const searchName = this.searchQuery;
    const searchResult = this.moduleData;
    return { searchResult, searchName };
  },
};
</script>

<style lang="scss" module>
.searchRoot {
  width: 100;
  .container {
    .searchHeader {
      padding: 24px;

      h1 {
        text-align: center;
      }
    }
    .searchResults {
      .searchList {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        list-style: none;

        li {
          margin: 16px;
        }
      }
    }
  }
}
</style>
