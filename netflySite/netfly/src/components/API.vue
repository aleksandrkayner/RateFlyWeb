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
    </div>
    <div class="image">
      <img src="../assets/logo.png" />
      <div class="abstruction2"></div>
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
  clip-path: polygon(100% 100%, 0 100%, 0 15%, 13% 0, 100% 0);
  background-color: black;
  color: aliceblue;
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  z-index: 0;
  flex-shrink: inherit;
  align-items: center;
  margin-top: -2rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;

  /*position: relative;
  bottom: -3rem;
  z-index: 0*/
}
.image > img {
  position: absolute;
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
.abstruction2 {
  clip-path: polygon(100% 0%, 39% 29%, 0% 45%, 100% 100%);
  background-color: red;
  align-self: flex-end;
  padding: 0;
  margin: 0;
  position: relative;
  bottom: -18.55rem;
  width: 7rem;
  height: 9rem;
  z-index: 9;
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
