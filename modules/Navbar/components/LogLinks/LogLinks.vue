<template>
  <ul v-if="!connected" :class="$style.list">
    <li><a href="/auth?login=true">Sign in</a></li>
    <li>
      <Button>
        <a href="/auth">Sign up</a>
      </Button>
    </li>
  </ul>
  <div v-else :class="$style.list">
    <p>
      {{ username }}
    </p>
    <button @click="disconnectUser">Disconnect</button>
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
  a {
    text-decoration: none;
  }
  li {
    margin-right: 2rem;

    line-height: 50px;

    list-style: none;
  }
}
</style>
