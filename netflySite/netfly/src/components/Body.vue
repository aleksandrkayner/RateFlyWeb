<template>
  <div class="body">
    <Intro />
    <SubBodyCLI />
    <API />
    <MeetCreators />
    <Spectrum />
    <Copy />
  </div>
</template>

<script>
import SubBodyCLI from "./SubBodyCLI";
import API from "./API";
import MeetCreators from "./MeetCreators";
import Spectrum from "./Spectrum";
import Copy from "./Copy";
import Intro from "./Intro";

export default {
  name: "Body",
  components: {
    SubBodyCLI,
    API,
    MeetCreators,
    Spectrum,
    Copy,
    Intro
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-flow: wrap column;
  flex-wrap: wrap;
  position: relative;
  top: -4rem;
}

.headerLeft {
  position: absolute;
  top: 10rem;
  left: 20rem;
  z-index: 9;
  color: rgb(240, 83, 11);
}

.browserIcons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
}
.browserIcons > img {
  padding: 1rem;
}
.gitLicense {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.gitLicense > a {
  padding: 0.3rem 5rem;
  margin: 2rem;
  border-radius: 3rem;
  background-color: rgb(216, 219, 221);
  text-decoration: none;
  color: black;
}
</style>
