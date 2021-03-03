<template>
  <div class="navbar">
    <img alt="Vue logo" src="../assets/netflyLOGO.jpg" class="logo" />
    <h1 class="ratefly">Ratefly</h1>
    <h3 class="subTextNavBar">Ratings on the fly</h3>
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
  border-right: white solid 3px;
}
.subTextNavBar {
  padding: 1rem;
}
</style>
