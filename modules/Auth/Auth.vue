<template>
  <div :class="$style.authRoot">
    <Wrapper :class="$style.inner">
      <div :class="$style.formContainer">
        <AuthToggle v-model="isLoginActiveData" :class="$style.authToggle" />
        <Login v-if="isLoginActiveData" />
        <Register v-else />
      </div>
    </Wrapper>
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
  width: 100%;
  height: 100vh;
  min-height: 700px;
}

.inner {
  display: flex;
  justify-content: center;
}

.formContainer {
  width: auto;
  min-width: 400px;
  margin-top: 80px;
  padding: 24px;
  border: solid 2px #6d6d6d;
  border-radius: 8px;
}

.authToggle {
  margin-bottom: 32px;
}
</style>
