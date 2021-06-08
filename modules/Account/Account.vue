<template>
  <div :class="$style.container">
    <p>Username : {{ username }}</p>
    <p>Email : {{ email }}</p>
    <Button @click="disconnectUser"> Deconnexion </Button>
    <a href="#">Delete account</a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Button from '~/components/Button';

export default {
  name: 'AccountModule',

  components: { Button },

  computed: {
    ...mapState('user', ['connected', 'username']),
  },

  methods: {
    ...mapActions('user', ['disconnectUser']),
  },
};
</script>

<style lang="scss" module>
.container {
  height: calc(100vh - 92px);
  margin-top: 20px;
}
</style>
