<template>
  <div :class="$style.authRoot">
    <Wrapper :class="$style.inner">
      <Login v-if="isLoginActive" />
      <Register v-else />
    </Wrapper>
  </div>
</template>

<script>
import { Login, Register } from './components';

export default {
  name: 'AuthModule',

  components: { Login, Register },

  props: {
    isLoginActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.authRoot {
  width: 100%;
  padding-top: 80px;
}

.inner {
  display: flex;
  justify-content: center;
  max-width: 400px;
  padding: 32px;
  border-radius: 8px;

  background-color: #dfdfdf;
}

.formContainer {
  width: auto;
  min-width: 400px;
  margin-top: 80px;
  padding: 24px;
  border: solid 2px #6d6d6d;
  border-radius: 8px;
}
</style>
