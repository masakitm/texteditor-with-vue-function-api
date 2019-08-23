<template>
  <div id="app">
    <TextEditor/>
  </div>
</template>

<script>
import TextEditor from "./components/organisms/TextEditor";

export default {
  components: {
    TextEditor
  }
};
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  height: 100%;
  overflow: scroll;
}

#app {
  height: 100%;
  overflow: scroll;
}
</style>
