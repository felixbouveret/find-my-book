<template>
  <div>
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
    <Button :class="$style.button" @click="onSubmit">Submit</Button>
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
    onSubmit() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style lang="scss" module>
.input {
  margin-top: 8px;
}

.button {
  margin-top: 16px;
}
</style>
