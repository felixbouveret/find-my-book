<template>
  <div :class="$style.registerContainer">
    <h1>Register</h1>
    <form @submit.prevent="signUp">
      <InputText
        v-model="username"
        :class="$style.input"
        type="text"
        label="Username"
        placeholder="Jack"
      />
      <InputText
        v-model="email"
        :class="$style.input"
        type="email"
        label="Email"
        placeholder="jack.doe@hey.com"
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
          this.message = res.message;
        })
        .catch((error) => {
          this.message = error.data.message;
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
  margin-top: 16px;
}
</style>
