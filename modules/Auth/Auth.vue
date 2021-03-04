<template>
  <div :class="$style.authRoot">
    <div :class="$style.formContainer">
      <AuthToggle v-model="isLoginActiveData" />
      <Login v-if="isLoginActiveData" />
      <Register v-else />
    </div>
  </div>
</template>

<script>
import { Login, Register, AuthToggle } from './components';

export default {
  name: 'AuthModule',

  components: { Login, Register, AuthToggle },

  props: {
    isLoginActive: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isLoginActiveData: this.isLoginActive,
    };
  },
};
</script>

<style lang="scss" module>
.authRoot {
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 700px;
}

.formContainer {
  margin: auto;
  padding: 24px;
  border: solid 2px lightgray;
  border-radius: 8px;
}
</style>
