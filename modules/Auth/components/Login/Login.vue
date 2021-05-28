<template>
  <div :class="$style.loginContainer">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <InputText
        v-model="username"
        :class="$style.input"
        type="username"
        label="Username"
        placeholder="jack"
      />
      <InputText
        v-model="password"
        :class="$style.input"
        type="password"
        label="Password"
        placeholder="password"
      />
      <Button :class="$style.button">Submit</Button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import jwtDecode from 'jwt-decode';
import InputText from '~/components/InputText';
import Button from '~/components/Button';

export default {
  name: 'Login',

  components: {
    InputText,
    Button,
  },

  data() {
    return {
      username: null,
      password: null,
    };
  },

  methods: {
    ...mapActions('user', ['connectUser']),
    async login() {
      await this.$axios
        .$post('api/login_check', {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          this.$axios.setToken(res.token, 'Bearer');
          const decodedToken = jwtDecode(res.token);
          this.$cookies.set(
            'auth',
            { token: res.token },
            {
              path: '/',
              maxAge: 3600,
            }
          );
          this.connectUser({
            userId: decodedToken.id,
            username: decodedToken.username,
          });
          this.$router.push('/');
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" module>
.input {
  width: 100%;
  margin-top: 8px;
}

.button {
  margin-top: 8px;
}
</style>
