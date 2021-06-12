<template>
  <footer :class="$style.footer">
    <Wrapper :class="$style.inner">
      <a href="/">
        <Logo :class="$style.logo" />
      </a>
      <a href="">Mentions légales</a>
      <a href="">Conditions d'utilisations</a>
      <p>
        Copyright : Benoit Lamonica, Bastien Rigaud, Félix Bouveret, Estelle
        Denage
      </p>
    </Wrapper>
  </footer>
</template>

<script>
import Logo from '~/assets/img/findmybooklogo.svg?inline';

export default {
  name: 'FooterModule',
  components: {
    Logo,
  },
};
</script>

<style lang="scss" module>
.footer {
  background-color: $light-grey;
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
}

.logo {
  height: 40px;
}
</style>
