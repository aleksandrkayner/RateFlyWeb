<template>
  <div class="navbar">
    <img alt="Vue logo" src="../assets/ratefly_logo.png" class="logo" />
    <!-- <h1 class="ratefly">Ratefly</h1>
    <h3 class="subTextNavBar">Ratings on the fly</h3> -->
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: aliceblue;
}
.ratefly {
  padding: 1rem;
  /* border-right: white solid 3px; */
}
.subTextNavBar {
  padding: 1rem;
}
.logo {
  width: 7rem;
  margin: 2rem;
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
