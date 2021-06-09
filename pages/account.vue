<template>
  <Account />
</template>

<script>
import Account from '~/modules/Account';

export default {
  components: { Account },
  middleware: 'auth/isNotConnected',
};
</script>
