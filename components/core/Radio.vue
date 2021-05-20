<template>
  <div class="eb-radio">
    <div class="form-check">
      <div v-for="(option, index) in options" :key="option.text">
        <input
          :id="id + index"
          :name="id"
          type="radio"
          :value="option.value"
          :checked="option.value === value"
          :class="inputClass"
          class="form-check-input eb-radio-input"
          :disabled="disabled"
          :required="required"
          @change="updateValue(option)"
        />
        <label :for="id + index" class="form-check-label">{{
          option.text
        }}</label>
        <slot v-if="option.value === value" :name="option.value" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    event: 'change',
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null,
    },
    options: {
      type: [Array],
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inputClass: {
      type: [String, Object],
      default: '',
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('change', value.value)
    },
  },
}
</script>
