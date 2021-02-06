<template>
  <div id="weather-widget" class="weather-widget">
    <index-view
      :show="!showSettings"
      @change-view="showSettings = !showSettings"
    />

    <settings-view
      :show="showSettings"
      @change-view="showSettings = !showSettings"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import IndexView from "@/views/IndexView.vue";
import SettingsView from "@/views/SettingsView.vue";

export default Vue.extend({
  name: "WeatherWidget",

  components: {
    IndexView,
    SettingsView
  },

  data() {
    return {
      showSettings: false
    };
  }
});
</script>

<style lang="scss">
.weather-widget {
  position: relative;
  width: 220px;
  margin: 0 auto;

  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
