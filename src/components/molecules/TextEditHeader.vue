<template>
  <header class="header">
    <button @click="handleSaveClick(text)">SAVE</button>
  </header>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    handleSaveClick: {
      type: Function,
      default: () => null
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
}
</style>