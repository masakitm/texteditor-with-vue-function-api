<template>
  <div>
    <TextEditHeader :handleSaveClick="saveValue" :text="inputText" />
    <div class="container">
      <TextViewer :textList="textList" />
      <TextBox :handleInput="updateText" :value="inputText" />
    </div>
  </div>
</template>

<script>
import TextEditHeader from '../molecules/TextEditHeader'
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
    TextEditHeader,
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