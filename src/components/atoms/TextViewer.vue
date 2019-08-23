<template>
  <div class="textbox is-vertical">
    <div class="textbox-inner">
      <p :key="item.id" v-for="item in textList">
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
.textbox {
  background: #fefefe;
  width: 50vw;
  height: 100vh;
  overflow: scroll;
}

.textbox-inner {
  min-width: 1000vw; 
}

.is-vertical {
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
</style>
