<template>
  <div id="weather-widget">
    <CityCard :item="city" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CityCard from "./components/CityCard.vue";
import city from "../tests/unit/__mocks__/city";

export default Vue.extend({
  name: "WeatherWidget",

  components: {
    CityCard
  },

  data() {
    return {
      city
    };
  }
});
</script>

<style lang="scss">
#weather-widget {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
