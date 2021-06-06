<template>
  <ul v-if="!connected" :class="$style.list">
    <li><a href="/auth?login=true">Connexion</a></li>
    <li>
      <Button href="/auth"> Inscription </Button>
    </li>
  </ul>
  <div v-else :class="$style.list">
    <p>
      {{ username }}
    </p>
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
