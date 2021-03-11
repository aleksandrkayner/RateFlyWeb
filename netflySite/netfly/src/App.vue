<template>
  <div class="main">
    <Body />
  </div>
</template>

<script>
import Body from "./components/Body";
export default {
  name: "App",
  components: {
    Body
  }
};
</script>

<style>
.main {
  margin-top: 0;
}
.logo {
  width: 5rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
