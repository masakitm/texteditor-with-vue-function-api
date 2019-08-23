const useStorage = () => {
  const saveValue = text => {
    localStorage.setItem("saved", text)
    localStorage.getItem('saved') === text && console.log('saved!')
  }
  
  return {
    saveValue
  }
}

export default useStorage;