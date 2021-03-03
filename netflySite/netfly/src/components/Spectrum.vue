<template>
  <div class="spectrum">
    <h1>Want more features?</h1>
    <h3>Join us on Spectrum Community and share your ideas, or just say hi.</h3>
    <a href="/" class="button">
      <h1>SPECTRUM</h1>
    </a>
  </div>
</template>

<script>
export default {
  name: "Spectrum"
};
</script>

<style>
.spectrum {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 0;
  background-color: rgb(15, 14, 14);
  color: aliceblue;
}
.button {
  padding: 0.3rem 5rem;
  border-radius: 3rem;
  margin: 3rem;
  background-color: aliceblue;
  text-decoration: none;
  color: black;
}
</style>
