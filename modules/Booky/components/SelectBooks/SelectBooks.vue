<template>
  <div>
    <h2>SelectBooks</h2>
    <NavButtons
      @next-step="$emit('next-step')"
      @previous-step="$emit('previous-step')"
    />
  </div>
</template>

<script>
import NavButtons from '../NavButtons';

export default {
  components: {
    NavButtons,
  },
};
</script>

<style></style>
