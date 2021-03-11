<template>
  <div class="main-wrap" ref="mainWrap">
    <NavBar />

    <div class="subBody" ref="subBody">
      <div class="netflixpage">
        <span>
          <img src="../assets/netflix3.png" />
        </span>
      </div>
      <!-- <hr /> -->
      <div class="extensionExplonation">
        <h1>
          <span>Browser Extension</span>
        </h1>
        <div class="appDescription">
          <h4>
            <span>Embedded IMDB ratings right on your Netflix page</span>
          </h4>
        </div>
        <div class="options">
          <div class="option">
            <img style="width:128px;" src="../assets/imdb_logo.png" />
            <span>IMDb Ratings</span>
          </div>
          <div class="option">
            <img style="width:64px;" src="../assets/skip_intros_icon.png" />
            <span>Skip Intros</span>
          </div>
          <div class="option">
            <img style="width:64px;" src="../assets/rating_icon.png" />

            <span>Number Ratings</span>
          </div>
        </div>

        <div class="gitLicense">
          <button v-on:click="expendDownload">
            <h4>CHOOSE BROWSER TO INSTALL</h4>
            <img
              ref="spinTriangle"
              id="spinTriangle"
              style="width:16px;"
              src="../assets/chevron_icon.png"
            />
          </button>
        </div>
      </div>
    </div>
    <!-- <transition name="slide"> -->
    <div id="browserIcons" ref="browserIcons">
      <div class="iconLink" ref="iconLink">
        <a href="https://www.google.com">
          <img class="iconBrowser" src="../assets/google.svg" />Google</a
        >
      </div>
      <div class="iconLink" ref="iconLink">
        <a href="https://www.google.com">
          <img class="iconBrowser" src="../assets/firefox.svg" />
          Google</a
        >
      </div>
      <div class="iconLink" ref="iconLink">
        <a href="https://www.google.com">
          <img class="iconBrowser" src="../assets/explorer.svg" />Google</a
        >
      </div>
      <div class="iconLink" ref="iconLink">
        <a href="https://www.google.com">
          <img class="iconBrowser" src="../assets/opera.svg" />Google</a
        >
      </div>
      <div class="iconLink" ref="iconLink">
        <a href="https://www.google.com">
          <img class="iconBrowser" src="../assets/safari.svg" />Google</a
        >
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: "Intro",
  components: {
    NavBar
  },
  methods: {
    expendDownload: function() {
      //clip-path: polygon(100% 0, 100% 93%, 69% 93%, 63% 100%, 59% 93%, 0 93%, 0 0);
      //let main = this.$refs.subBody;
      let triangle = this.$refs.spinTriangle;
      let popout = this.$refs.browserIcons;
      let icon = document.querySelectorAll(".iconLink");
      let browser = document.querySelectorAll(".iconBrowser");
      //console.log(triangle.style.transform == "rotate(180deg)", icon);
      if (triangle.style.transform == "rotate(0deg)") {
        icon.forEach(i => {
          i.style.opacity = "0";
          i.style.height = "0";
          i.style.visibility = "hidden";
        });
        browser.forEach(b => {
          b.style.width = "0";
          b.style.visibility = "hidden";
        });
        // main.style.clipPath =
        // "polygon(100% 0, 100% 93%, 69% 93%, 63% 100%, 59% 93%, 0 93%, 0 0)";
        triangle.style = "transform: rotate(180deg)";
        //popout.style.marginTop = "0rem";
        popout.style.height = "0rem";
      } else {
        icon.forEach(i => {
          i.style.opacity = "1";
          i.style.height = "5rem";
          i.style.visibility = "visible";
        });
        browser.forEach(b => {
          b.style.width = "48px";
          b.style.visibility = "visible";
        });
        //main.style.clipPath =
        // "polygon(100% 0, 100% 93%, 69% 93%, 63% 100%, 59% 93%, 0 93%, 0 0)";
        triangle.style = "transform: rotate(0deg)";
        popout.style.height = "5rem";
        //popout.style.marginTop = "-7rem";
        // icon.style.visibility = "visible";
        // popout.style.display = "flex";
        //popout.style.transform = " translateY(0%)";
      }
      // `this` inside methods points to the Vue instance

      // `event` is the native DOM event
    }
  }
};
</script>

<style>
.final {
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.desighn-triangle {
  clip-path: polygon(27% 61%, 100% 100%, 100% 61%);
  position: inherit;

  right: 0;
  top: 0rem;
  z-index: 100;
  background-color: black;
  width: 4rem;
}
.hr {
  position: inherit;
  width: 80%;
}
.iconLink {
  /* visibility: hidden; */
  height: 0;
  opacity: 0;
  /* transition: all 1s ease-in; */
  transition: height 0.1s ease-in;
}
.iconLink > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #dee6e9;
  transition: width 0.1s;
  /* visibility: hidden; */
}
.main-wrap {
  clip-path: polygon(0 0, 100% 1%, 100% 100%, 87% 89%, 1% 89%);
  position: relative;
  z-index: 9;

  /* clip-path: polygon(0 0, 100% 1%, 100% 100%, 93% 93%, 1% 93%); */
  margin-top: 0;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 8rem;
}
/* .main-wrap:after {
  position: absolute;
  margin: -3rem;
  border-radius: 0 0 50% 0;
} */
.iconBrowser {
  width: 0;
  padding: 1rem;
  transition: width 1s;
  padding-top: 1.5rem;
}
#spinTriangle {
  margin: 0.5rem;
  position: relative;
  -webkit-transition: -webkit-transform 0.1s ease-in;
  -ms-transition: -ms-transform 0.1s ease-in;
  transition: all 0.1s ease-in;
}
.transition {
  transform: rotate(180deg);
}
.subBody {
  width: 100%;
  /* {{clip-path: polygon(100% 0, 100% 93%, 69% 93%, 63% 100%, 59% 93%, 0 93%, 0 0);}} */
  /* clip-path: polygon(100% 0, 100% 97%, 67% 97%, 63% 100%, 59% 97%, 0 97%, 0 0); */
  /*clip-path: polygon(100% 0, 100% 97%, 64% 97%, 59% 100%, 54% 97%, 0 97%, 0 0);*/
  clip-path: polygon(100% 0, 100% 96%, 61% 96%, 59% 100%, 57% 96%, 0 96%, 0 0);
  padding-bottom: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  /* position: relative; */
  color: aliceblue;
  background-color: black;
  margin-bottom: -2rem;
}
.netflixpage {
  width: 50%;
}
.extensionExplonation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: relative;
  left: 0;
}
.extensionExplonation > h1 {
  margin-bottom: 0.4rem;
}
.option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.options {
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  background-color: rgb(37, 36, 36);
}
.weirdShape {
  /* clip-path: polygon(83% 0%, 19% 7%, 19% 78%, 95% 100%); */

  /* position: absolute;
  top: 9rem;
  height: 43rem;
  width: 50rem;
  bottom: -5rem; */

  color: black;
}
span > img {
  /* height: 35rem; */
  width: 100%;

  position: relative;

  right: 0rem;
}
.headerLeft {
  position: absolute;
  top: 10rem;
  left: 20rem;
  z-index: 9;
  color: rgb(240, 83, 11);
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
  padding-top: 0;
  margin-top: 0;
}
.appDescription > h4 {
  padding: 0;
  margin: 0;
  margin-block-start: 0;
}
.supported {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
#browserIcons {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* padding: 1rem; */
  height: 0;
  background-color: rgb(65, 62, 62);
  /* transition-property: transform;
  transition-duration: 3s; */
  transition: height 0.5s;
}

/* .browserIcons > img {
  padding: 1rem;
} */
.gitLicense {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.gitLicense > button {
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
  .subBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
/* .weirdShape > img {
    position: relative;
  }
  .weirdShape {
    position: relative;
  } */

/* .slide-enter-active,
.slide-leave-active {
  transition: margin-bottom 3s ease-out;
}

.slide-enter,
.slide-leave-to {
  margin-bottom: -200px;
}

.slide-enter-to,
.slide-leave {
  margin-bottom: 0px;
} */
.navbar {
  width: 100%;
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
