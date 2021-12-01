<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ToDoInput />
  </div>
</template>

<script>
import ToDoInput from "./components/ToDo/Input.vue";
export default {
  name: "App",
  components: {
    ToDoInput,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
