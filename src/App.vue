<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <CityCard city="Saint Petersburg" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CityCard from "./components/CityCard.vue";

export default Vue.extend({
  name: "App",
  components: {
    CityCard
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
