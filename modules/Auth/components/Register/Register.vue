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
      <div :class="$style.actions">
        <Button :class="$style.button">S'inscrire</Button>
        <a :class="$style.link" href="/auth/login">Se connecter</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: null,
      email: null,
      password: null,
    };
  },

  methods: {
    async signUp() {
      await this.$axios
        .$post('api/register', {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          this.$router.push('/auth/login');
        })
        .catch((error) => {
          console.error(error);
        });
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
