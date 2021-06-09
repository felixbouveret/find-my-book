<template>
  <section :class="$style.container">
    <div :class="$style.userInfos">
      <div>
        <p>Username : {{ username }}</p>
        <p>Email : {{ userEmail }}</p>
      </div>
      <div :class="$style.buttons">
        <Button @click="disconnectUser"> Deconnexion </Button>
        <Button :class="$style.delete" href="#">Delete account</Button>
      </div>
    </div>
    <div :class="$style.books">
      <h1>Liked books</h1>
      <p>Total books liked :</p>
      <ul></ul>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Button from '~/components/Button';

export default {
  name: 'AccountModule',

  components: { Button },

  data() {
    return { userEmail: '' };
  },

  async fetch() {
    await this.getEmail();
  },

  computed: {
    ...mapState('user', ['connected', 'username', 'userId']),
  },

  watch: {
    userEmail() {
      this.getEmail();
    },
  },

  methods: {
    ...mapActions('user', ['disconnectUser']),
    async getEmail() {
      this.userEmail = await this.$axios.$get(`user/email/${this.userId}`);
    },
  },
};
</script>

<style lang="scss" module>
.container {
  p {
    margin: 10px 0;
  }
  .delete {
    width: 150px;

    background-color: red;
  }
  width: 95vw;
  height: calc(100vh - 92px);
  margin: 0 auto;
  margin-top: 20px;
  .userInfos {
    display: flex;
    justify-content: space-between;

    p {
      margin: 10px 0;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      max-height: 40px;
      margin-top: 1rem;
    }
    .delete {
      width: 150px;
      margin-left: 10px;

      background-color: red;
    }
  }
  .books {
    margin-top: 2rem;
  }
}
</style>
