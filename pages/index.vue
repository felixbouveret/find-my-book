<template>
  <div class="container">
    <button @click="disconnectUser">deco</button>
    <HomeModule />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HomeModule from '~/modules/Home';

export default {
  components: {
    HomeModule,
  },

  methods: {
    ...mapActions('user', ['disconnectUser']),
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;

  text-align: center;
}
</style>
