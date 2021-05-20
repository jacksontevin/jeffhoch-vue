<template>
  <input :type="type" :placeholder="placeholder" class="eb-input-box" />
</template>
<script>
export default {
  name: 'Input',
  modal: 'input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Enter Value',
    },
  },
  data() {
    return {}
  },
}
</script>
