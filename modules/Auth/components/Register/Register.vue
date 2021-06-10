<template>
  <div :class="$style.container">
    <h1 :class="$style.title">S'inscrire</h1>
    <form @submit.prevent="signUp">
      <InputText
        v-model="username"
        :class="$style.input"
        type="username"
        label="Pseudo"
        placeholder="JackDu32"
      />
      <InputText
        v-model="email"
        :class="$style.input"
        type="email"
        label="Email"
        placeholder="jackdu32@skyrock.fr"
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
        <Button :class="$style.button" :is-loading="isLoading"
          >S'inscrire</Button
        >
        <a :class="$style.link" href="/auth/login">Se connecter</a>
      </div>
    </form>
  </div>
</template>

<script>
import MessageBox from '../MessageBox';

export default {
  name: 'Login',

  components: {
    MessageBox,
  },

  data() {
    return {
      username: null,
      email: null,
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
    email() {
      this.resetErrorMessage();
    },
    password() {
      this.resetErrorMessage();
    },
  },

  methods: {
    async signUp() {
      this.isLoading = true;
      await this.$axios
        .$post('api/register', {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.isLoading = false;
          this.successMessage =
            'Tu es maintenant enregistré ! Tu vas être bientôt redirigé pour te connecter';
          setInterval(() => this.$router.push('/auth/login'), 2000);
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
</style>
