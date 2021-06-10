<template>
  <p
    :class="[
      { [$style.error]: errorMessage },
      { [$style.success]: successMessage },
    ]"
  >
    {{ currentMessage }}
  </p>
</template>

<script>
export default {
  name: 'MessageBox',

  props: {
    errorMessage: {
      type: String,
      default: '',
    },
    successMessage: {
      type: String,
      default: '',
    },
  },

  computed: {
    currentMessage() {
      return this.errorMessage || this.successMessage;
    },
  },
};
</script>

<style lang="scss" module>
.error {
  color: $red;
}

.success {
  color: $green;
}
</style>
