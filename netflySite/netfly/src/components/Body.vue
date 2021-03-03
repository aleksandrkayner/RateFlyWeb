<template>
  <div class="body">
    <div class="subBody">
      <div class="netflixpage">
        <div class="weirdShape">
          <span>
            <h1 class="headerLeft">Netflix Page</h1>
          </span>
        </div>
      </div>
      <hr />
      <div class="extensionExplonation">
        <h1>
          <span>Browser Extension</span>
        </h1>
        <div class="options">
          <div class="option">
            <img style="width:64px;" src="../assets/imdb.svg" />
            <span>IMDB RATINGS</span>
          </div>
          <div class="option">
            <img style="width:64px;" src="../assets/skip.svg" />
            <span>SKIP INTROS</span>
          </div>
          <div class="option">
            <img style="width:64px;" src="../assets/star.svg" />

            <span>
              PHRASED AND STAR RATING
              <br />RATING R (OPTIONAL)
            </span>
          </div>
        </div>
        <div class="appDescription">
          <span>* Embedded IMDB ratings right on your Netflix page</span>
        </div>
        <div class="supported">
          <span>
            <h3>Supported:</h3>
          </span>
          <div class="browserIcons">
            <img style="width:24px;" src="../assets/google.svg" />
            <img style="width:24px;" src="../assets/firefox.svg" />
            <img style="width:24px;" src="../assets/explorer.svg" />
            <img style="width:24px;" src="../assets/opera.svg" />
            <img style="width:24px;" src="../assets/safari.svg" />
          </div>
        </div>
        <div class="gitLicense">
          <a href="/">
            <h1>GITHUB</h1>
          </a>
          <span>MIT License</span>
        </div>
      </div>
    </div>
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
export default {
  name: "Body",
  components: {
    SubBodyCLI,
    API,
    MeetCreators,
    Spectrum,
    Copy
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
}
.subBody {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: column;
  color: aliceblue;
  background-color: black;
  align-items: baseline;
}
.netflixpage {
  width: 50%;
}
.extensionExplonation {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.options {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}
.weirdShape {
  clip-path: polygon(83% 0%, 19% 7%, 19% 78%, 95% 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  height: 40rem;
  bottom: -5rem;
  background-color: beige;
  color: black;
}
.headerLeft {
  position: relative;
  top: 11rem;
}
hr {
  position: absolute;
  align-self: center;
  top: 35%;
  left: 40%;
  overflow-wrap: inherit;
  background-color: rgb(247, 4, 4);
  height: 4px;
  border: none;
  width: 15vw;
  padding: 0;
  margin: 0;
  z-index: 2;
}
.appDescription {
  position: relative;
  padding-top: 1rem;
}
.supported {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
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
@media (max-width: 1024px) {
  .subBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>