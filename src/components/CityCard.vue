<template>
  <div>
    {{ city }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CityCard",
  props: {
    city: { type: String, required: true }
  }
});
</script>
