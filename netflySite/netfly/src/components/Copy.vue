<template>
  <div class="copyright">
    <span>Copyrights {{year}} - WeScreen LLC</span>
  </div>
</template>

<script>
export default {
  name: "Copy",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style>
.copyright {
  padding-top: 0;
  margin-top: 0;
  background-color: rgb(3, 3, 3);
  color: aliceblue;
  width: 100%;
}
</style>