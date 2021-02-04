<template>
  <div class="ww-card__title">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppCardTitle"
});
</script>

<style lang="scss">
.ww-card__title {
  font-weight: bold;
  padding: 12px;
}
</style>
