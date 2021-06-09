<template>
  <div :class="$style.buttonContainer">
    <Button is-light @click="$emit('previous-step')">Retour</Button>
    <Button
      :is-disabled="!isActive"
      @click="isActive ? $emit('next-step') : null"
    >
      Suivant
    </Button>
  </div>
</template>

<script>
export default {
  name: 'NavButtons',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.buttonContainer {
  display: flex;
  gap: 24px;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-top: 32px;

  button {
    flex-grow: 1;
  }
}
</style>
