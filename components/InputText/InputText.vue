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
}

.label {
  display: block;
  margin-bottom: 8px;
}

input {
  padding: 8px;
  border: solid 1px;
  border-radius: 4px;
}
</style>
