<template>
  <b-card :title="title" :bg-variant="bgVariant" :text-variant="textVariant">
    <b-card-text>
        <slot></slot>
    </b-card-text>    
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Card Title"
    },
    bgVariant: {
      type: String,
      default: ""
    },
    textVariant: {
      type: String,
      default: "dark"
    },
  }
}
</script>