<template>
  <div class="ww-card">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppCard"
});
</script>

<style lang="scss">
.ww-card {
  width: 200px;
  box-sizing: border-box;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
