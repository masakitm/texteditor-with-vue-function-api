import { value, computed, onMounted } from "vue-function-api";

const useTextArea = () => {
  const inputText = value("");

  const textList = computed(() => {
    const list = inputText.value.split('\n')
    return list.map((item, index) => ({ text: item, id: index }))
  })

  const updateText = text => {
    inputText.value = text;
  }

  onMounted(() => {
    inputText.value = localStorage.getItem('saved')
  })

  return {
    inputText,
    textList,
    updateText
  };
};

export default useTextArea;
