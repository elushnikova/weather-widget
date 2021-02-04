<template>
  <div
    class="ww-card__content"
    :class="{ 'ww-card__content--no-padding': noPadding }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppCardContent",

  props: {
    noPadding: { type: Boolean, default: false }
  }
});
</script>

<style lang="scss">
.ww-card__content:not(.ww-card__content--no-padding) {
  padding: 12px;
}
</style>
