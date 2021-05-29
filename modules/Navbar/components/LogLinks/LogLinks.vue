<template>
  <ul :class="$style.list">
    <li><a href=""></a>Sign in</li>
    <li>
      <Button>
        <a href="">Sign up</a>
      </Button>
    </li>
  </ul>
</template>

<script>
import Button from '~/components/Button';

export default {
  name: 'LogLinks',
  components: { Button },
};
</script>

<style lang="scss" module>
.list {
  display: flex;
  a {
    text-decoration: none;
  }
  li {
    margin-right: 2rem;

    line-height: 50px;

    list-style: none;
  }
}
</style>
