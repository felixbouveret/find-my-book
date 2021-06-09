<template>
  <ul v-if="!connected" :class="$style.list">
    <li><a href="/auth/login" :class="$style.loginButton">Connexion</a></li>
    <li>
      <Button href="/auth/register"> Inscription </Button>
    </li>
  </ul>
  <div v-else :class="$style.list">
    <a href="/account">
      {{ username }}
    </a>
    <button :class="$style.disconnect" @click="disconnectUser">
      Deconnexion
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Button from '~/components/Button';

export default {
  name: 'LogLinks',

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
.list {
  display: flex;
  gap: 16px;
  align-items: center;

  .loginButton {
    padding: 10px;
    border: 1px solid $red;
    border-radius: 8px;

    color: $red;
    font-size: 16px;
    text-decoration: none;

    &:hover {
      color: white;

      background-color: $red;
    }
  }
}

.disconnect {
  border: 0;

  font-size: 16px;
  text-decoration: underline;

  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
}
</style>
