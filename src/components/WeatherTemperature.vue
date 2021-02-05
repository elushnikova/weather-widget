<template>
  <span class="ww-temperature">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WeatherTemperature"
});
</script>

<style lang="scss">
.ww-temperature {
  flex-basis: 50%;
  font-weight: bold;
  font-size: 2.5em;
}
</style>
