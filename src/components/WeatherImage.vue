<template>
  <img class="ww-image" :src="url" :alt="alt" :width="size" :height="size" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WeatherImage",

  props: {
    url: { type: String, required: true },
    alt: { type: String, required: true },
    size: { type: Number, default: 100 }
  }
});
</script>
