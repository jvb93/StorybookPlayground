<template>
  <h2>
      {{text}}
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Hello World'
    }
  }
}
</script>