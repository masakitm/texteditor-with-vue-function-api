<template>
  <textarea :value="value" @input="e => { 
    handleInput(e.target.value)
  }" class="textarea"/>
</template>


<script>
export default {
  props: {
    value: {
      type: String,
    },
    handleInput: {
      type: Function,
      default: () => null
    }
  }
};
</script>

<style scoped>
.textarea {
  width: 50vw;
  height: 100vh;
  border: 1px solid #999;
  border-left: none;
}
</style>