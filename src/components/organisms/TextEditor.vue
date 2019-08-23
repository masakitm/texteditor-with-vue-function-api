<template>
  <div>
    <Header :handleSaveClick="saveValue" :text="inputText" />
    <div class="container">
      <TextBox :handleInput="updateText" :value="inputText" />
      <TextViewer :textList="textList" />
    </div>
  </div>
</template>

<script>
import Header from './Header'
import TextBox from "../atoms/TextBox";
import TextViewer from "../atoms/TextViewer";

import useTextArea from "../../hooks/useTextArea";
import useStorage from '../../hooks/useStorage'

export default {
  setup() { 
    return {
      ...useTextArea(),
      ...useStorage()
    } 
  },
  components: {
    Header,
    TextBox,
    TextViewer
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>