<template>
  <div>
    {{ item.name }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CityCard",
  props: {
    item: { type: Object, required: true }
  }
});
</script>
