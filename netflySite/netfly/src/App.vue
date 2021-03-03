<template>
  <div>
    <NavBar msg="Aleksandr Project" />
    <Body />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Body from "./components/Body";
export default {
  name: "App",
  components: {
    NavBar,
    Body
  }
};
</script>

<style>
.logo {
  width: 5rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
