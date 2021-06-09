<template>
  <div :class="$style.footer">
    <Wrapper :class="$style.inner">
      <a href="/">
        <img
          :class="$style.logo"
          src="~/assets/img/findmybooklogo.svg"
          alt=""
        />
      </a>
      <a href="">test</a>
      <a href="">test</a>
      <p>Copyright : Benoit, Bastien, Félix, Estelle</p>
    </Wrapper>
  </div>
</template>

<script>
export default {
  name: 'FooterModule',
};
</script>

<style lang="scss" module>
.footer {
  padding: 24px;

  background-color: $light-grey;
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 60px;
}
</style>
