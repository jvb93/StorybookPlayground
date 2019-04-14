<template>
  <b-button :disabled="isDisabled" variant="primary" size="lg">
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>