<template>
  <AuthModule is-login-active />
</template>

<script>
import AuthModule from '~/modules/Auth';

export default {
  components: {
    AuthModule,
  },
  middleware: 'auth/isConnected',
};
</script>

<style></style>
