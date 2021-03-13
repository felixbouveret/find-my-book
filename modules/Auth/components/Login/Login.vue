<template>
  <div :class="$style.loginContainer">
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
  margin-top: 8px;
}
</style>
