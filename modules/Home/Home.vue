<template>
  <section :class="$style.homeRoot">
    <div :class="$style.container">
      <SearchBar />
    </div>
  </section>
</template>

<script>
import SearchBar from '~/components/SearchBar';
export default {
  name: 'HomeModule',

  components: { SearchBar },
};
</script>

<style lang="scss" module>
.homeRoot {
}
</style>
