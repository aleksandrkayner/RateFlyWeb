<template>
  <div class="MeetCreators">
    <div class="title">
      <h1>Meet Creators</h1>
    </div>
    <div class="people">
      <div class="person">
        <img src="../assets/crazyface.jpeg" />
        <span>Aleksandr Pooktwice</span>
        <a href="https://www.google.com">Link to whatever</a>
      </div>
      <div class="person">
        <img src="../assets/girlfunny.jpeg" />
        <span>Yelena Nopook</span>
        <a href="https://www.google.com">Link to whatever</a>
      </div>
      <div class="person">
        <img src="../assets/fishman.jpeg" />
        <span>Igor Vamvsempook</span>
        <a href="https://www.google.com">Link to whatever</a>
      </div>
      <div class="person">
        <img src="../assets/oldfunny.jpeg" />
        <span>Jamie Ykakalpook</span>
        <a href="https://www.google.com">Link to whatever</a>
      </div>
      <div class="person">
        <h3>Thank Too</h3>
        <span>WeScreen LLC Team</span>
        <a href="https://www.google.com">Link to whatever</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetCreators"
};
</script>

<style>
.person > img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}
.person {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.people {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.MeetCreators {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
@media (max-width: 1024px) {
  .people {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>