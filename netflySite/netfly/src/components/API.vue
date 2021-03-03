<template>
  <div class="API">
    <div class="text">
      <div class="abstruction"></div>
      <h1>Node/Python API</h1>
      <h4>
        You want to make it yours?
        <br />Get your ratings and more from IMDB...
      </h4>
      <div class="gitLicense">
        <a href="/">
          <h1>GITHUB</h1>
        </a>
        <span>MIT License</span>
      </div>
      <h1></h1>
      <h1></h1>
    </div>
    <div class="image">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "API"
};
</script>

<style>
.API {
  background-color: black;
  color: aliceblue;
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  flex-shrink: inherit;
  align-items: center;
  margin-top: 2rem;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*position: relative;
  left: 15rem;*/
  width: 50%;
}
.image {
  width: 50%;
}
.gitLicense {
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start;*/
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
.abstruction {
  clip-path: polygon(100% 0%, 39% 29%, 0% 45%, 100% 100%);
  background-color: red;
  position: relative;
  left: 15rem;
  top: -4.5rem;
  padding: 0;
  margin: 0;
  z-index: 2;
  width: 5rem;
  height: 7rem;
  padding-bottom: 3rem;
}
@media (max-width: 1024px) {
  .API {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>