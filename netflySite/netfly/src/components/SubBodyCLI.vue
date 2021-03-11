<template>
  <div class="CLI">
    <div class="CLIDescription">
      <h2>Ratings via CLI</h2>
      <h4>
        Fun for everyone even for our
        <a href="javascript: document.body.scrollIntoView(false);">engineers</a>
      </h4>
      <div class="npmCopy" @mouseover="displayIcon" @mouseleave="removeIcon">
        <button @click="onCopy" class="buttonContainer" ref="button">
          <input v-model="message" disabled ref="textInput" id="textInput" />
          <img src="../assets/copy.png" id="imgIcon" ref="imgIcon" />
        </button>
      </div>
      <div class="gitLicense">
        <a href="/">
          <h4>GITHUB</h4>
        </a>
        <a href="/">
          <h4 class="NPMPage">NPM Page</h4>
        </a>
      </div>
      <span>MIT License</span>
    </div>
    <div class="CLIImage">
      <img class="terminal" src="../assets/CLI.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SubBodyCLI",
  data() {
    return { message: "> npm install -g ratefly" };
  },
  methods: {
    removeIcon: function() {
      let container = this.$refs.button;
      let img = this.$refs.imgIcon;
      img.style.display = "none";
      container.style.backgroundColor = "grey";
    },
    displayIcon: function() {
      let container = this.$refs.button;
      let img = this.$refs.imgIcon;
      img.style.display = "block";
      container.style.backgroundColor = "#C1FFC1";
    },
    onCopy: function() {
      let container = this.$refs.button;
      navigator.clipboard.writeText("npm install -g ratefly").then(() => {
        setTimeout(() => {
          container.style.backgroundColor = "grey";
          this.message = "> npm install -g ratefly";
        }, 5000);
      });
      this.message = "Copied!!!";
      container.style.backgroundColor = "#C1FFC1";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#imgIcon {
  display: none;
  position: relative;
  opacity: 0.8;
  color: black;
  width: 4rem;
}

.CLIImage {
  display: flex;
  justify-content: flex-start;
  width: 50%;
  overflow: auto;
}

.terminal {
  width: 40rem;
  height: 26.5rem;
}
.NPMPage {
  display: flex;
  flex-direction: row;
  position: relative;
}
.buttonContainer {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 18rem;
  padding: 0;
  border: 5px rgb(31, 30, 30) solid;
}
.buttonContainer > input {
  padding: 1.5rem;
  cursor: pointer;
  width: 100%;
  color: black;

  justify-self: center;
  font-size: 1rem;
}
.CLI {
  /* background-color: white; */
  width: 100%;
  position: relative;
  /* top: 6rem; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  z-index: 9;
  padding-bottom: 6rem;
  /* margin-bottom: 3rem; */

  overflow: hidden;
}
.CLIDescription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 50%;
  position: relative;
  left: 9rem;
}
.gitLicense {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.gitLicense > a {
  text-decoration: none;

  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 4rem;
  border-radius: 3rem;
  background-color: #c52b29;
  text-decoration: none;
  color: #dee6e9;
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
