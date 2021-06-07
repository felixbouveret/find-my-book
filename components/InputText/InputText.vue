<template>
  <div :class="$style.InputTextContainer">
    <label v-if="label" :class="$style.label" :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :class="$style.input"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputText',

  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
.InputTextContainer {
  width: 100%;
}

.label {
  display: block;
  margin-bottom: 16px;

  font-size: 16px;
}

input {
  width: 100%;
  margin-bottom: 8px;
  padding: 12px;
  border: solid 2px;
  border-radius: 8px;

  font-size: 16px;
}
</style>
