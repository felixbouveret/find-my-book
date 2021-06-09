<template>
  <FooterModule :class="$style.footer" />
</template>

<script>
import FooterModule from '~/modules/Footer';

export default {
  name: 'Footer',

  components: {
    FooterModule,
  },
};
</script>

<style lang="scss" module>
.footer {
  width: 100%;
}
</style>
