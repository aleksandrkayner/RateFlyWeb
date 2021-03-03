<template>
  <div class="CLI">
    <div class="CLIDescription">
      <h1>Ratings via CLI</h1>
      <h3>
        Fun for everyone even for our
        <a
          href="javascript: document.body.scrollIntoView(false);"
        >engineers</a>
      </h3>
      <h3 class="boldH1"># npm ratefly</h3>
      <div class="gitLicense">
        <a href="/">
          <h1>GITHUB</h1>
        </a>
        <span>MIT License</span>
      </div>
      <h3 style="text-align:center;display:flex;justify-content:center;" class="NPMPage">NPM Page</h3>
    </div>
    <div class="CLIImage">
      <img class="terminal" src="../assets/CLI.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SubBodyCLI"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CLIImage {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  overflow: auto;
}

.terminal {
  width: 80%;
}
.NPMPage {
  display: flex;
  flex-direction: row;
  position: relative;
  left: 6.5rem;
}

.CLI {
  width: 100%;
  position: relative;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  overflow: hidden;
}
.CLIDescription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
}
.gitLicense {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.gitLicense > a {
  padding: 0.3rem 5rem;
  margin: 2rem;
  margin-left: 0;
  border-radius: 3rem;
  background-color: rgb(216, 219, 221);
  text-decoration: none;
  color: black;
}
@media (max-width: 1024px) {
  .CLI {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
