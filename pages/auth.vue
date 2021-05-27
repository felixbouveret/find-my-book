<template>
  <AuthModule :is-login-active="isLoginActive" />
</template>

<script>
import AuthModule from '~/modules/Auth';

export default {
  components: {
    AuthModule,
  },
  middleware: 'auth/isConnected',

  asyncData({ query }) {
    const isLoginActive = !!query.login;

    return { isLoginActive };
  },
};
</script>
