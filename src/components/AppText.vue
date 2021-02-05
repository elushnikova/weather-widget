<template>
  <p class="ww-text">
    <slot />
  </p>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppText"
});
</script>

<style lang="scss">
.ww-text {
  margin: 0;
  margin-bottom: 12px;
}
</style>
