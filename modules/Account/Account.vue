<template>
  <div :class="$style.container">
    <p>Username : {{ username }}</p>
    <p>Email : {{ userEmail }}</p>
    <Button @click="disconnectUser"> Deconnexion </Button>
    <Button :class="$style.delete" href="#">Delete account</Button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Button from '~/components/Button';

export default {
  name: 'AccountModule',
  props: {
    userEmail: {
      type: String,
      default: '',
    },
  },

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
  p {
    margin: 10px 0;
  }
  .delete {
    background-color: red;
    width: 150px;
  }
  width: 95vw;
  margin: 0 auto;
  height: calc(100vh - 92px);
  margin-top: 20px;
}
</style>
