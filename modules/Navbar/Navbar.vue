<template>
  <header
    ref="header"
    :class="[$style.navbar, { [$style.shadowBar]: shadowBar }]"
  >
    <Wrapper :class="$style.inner">
      <div :class="$style.left">
        <a href="/">
          <Logo :class="$style.logo" />
        </a>
        <Links />
      </div>
      <div
        v-if="searchResults"
        :class="$style.searchBackdrop"
        @click="searchResults = null"
      />
      <div :class="$style.searchBar">
        <SearchBar placeholder="Rechercher..." @onSearch="setResults($event)" />
        <SearchBarResults
          v-if="searchResults"
          :results="searchResults"
          :query="searchQuery"
          :class="$style.searchBarResults"
        />
      </div>
      <div :class="$style.right">
        <LogLinks />
      </div>
    </Wrapper>
  </header>
</template>

<script>
import { Links, LogLinks, SearchBarResults } from './components';
import SearchBar from '~/components/SearchBar';
import Logo from '~/assets/img/findmybooklogo.svg?inline';

export default {
  name: 'NavbarModule',

  components: { Links, LogLinks, SearchBar, SearchBarResults, Logo },

  data() {
    return {
      searchResults: null,
      searchQuery: null,
      shadowBar: false,
    };
  },

  mounted() {
    this.shadowOnScroll();
  },

  methods: {
    shadowOnScroll() {
      document.addEventListener('scroll', (e) => {
        if (window.pageYOffset) this.shadowBar = true;
        if (!window.pageYOffset) this.shadowBar = false;
      });
    },
    setResults({ res, searchQuery }) {
      this.searchResults = res;
      this.searchQuery = searchQuery;
    },
  },
};
</script>

<style lang="scss" module>
.navbar {
  padding: 0 24px;

  transition-duration: 0.3s;
  transition-property: background-color, box-shadow;
}

.shadowBar {
  background-color: $light-grey;
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 100px 80px rgba(0, 0, 0, 0.07);
}
.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.logo {
  height: 32px;
}

.searchBar {
  position: relative;

  flex-grow: 1;
  max-width: 285px;
}

.searchBarResults {
  left: 50%;

  width: 200%;
  max-width: 400px;

  transform: translateX(-50%) translateY(28px);
}

.searchBackdrop {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}

.left {
  display: flex;
}
</style>
