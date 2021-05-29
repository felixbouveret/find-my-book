<template>
  <ul :class="$style.list">
    <li><a href=""></a>Categories</li>
  </ul>
</template>

<script>
export default {
  name: 'Links',
};
</script>

<style lang="scss" module>
.list {
  li {
    line-height: 50px;

    list-style: none;
  }
}
</style>
