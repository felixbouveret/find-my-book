<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Connexion</h1>
    <form @submit.prevent="login">
      <InputText
        v-model="username"
        :class="$style.input"
        type="username"
        label="Pseudo"
        placeholder="JackDu32"
      />
      <InputText
        v-model="password"
        :class="$style.input"
        type="password"
        label="Mot de passe"
        placeholder="mamy1234"
      />
      <MessageBox
        :error-message="errorMessage"
        :success-message="successMessage"
      />
      <div :class="$style.actions">
        <Button :class="$style.button" :is-loading="isLoading">
          Se connecter
        </Button>
        <a :class="$style.link" href="/auth/register">S'enregistrer</a>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import jwtDecode from 'jwt-decode';
import MessageBox from '../MessageBox';
import InputText from '~/components/InputText';
import Button from '~/components/Button';

export default {
  name: 'Login',

  components: {
    InputText,
    Button,
    MessageBox,
  },

  data() {
    return {
      username: null,
      password: null,
      isLoading: false,
      errorMessage: '',
      successMessage: '',
    };
  },

  watch: {
    username() {
      this.resetErrorMessage();
    },
    password() {
      this.resetErrorMessage();
    },
  },

  methods: {
    ...mapActions('user', ['connectUser']),
    async login() {
      this.isLoading = true;
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
          this.isLoading = false;
          this.successMessage = 'Connecté ! Tu vas être redirigé...';
          setTimeout(() => this.$router.push('/'), 2000);
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
          this.errorMessage = error.data.message;
        });
    },

    resetErrorMessage() {
      if (this.errorMessage) this.errorMessage = '';
    },
  },
};
</script>

<style lang="scss" module>
.container {
  width: 100%;
}

.title {
  font-size: 32px;
}

.input {
  width: 100%;
  margin-top: 16px;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
}

.link {
  color: black;
  font-size: 14px;

  &:hover {
    text-decoration: none;
  }
}

.error {
  color: $red;
}

.successMessage {
  color: $green;
}
</style>
