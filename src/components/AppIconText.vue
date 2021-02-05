<template>
  <span class="ww-icon-text" :style="`line-height: ${lineHeight}px;`">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppIconText",

  props: {
    lineHeight: { type: Number, default: 16 }
  }
});
</script>

<style lang="scss">
.ww-icon + .ww-icon-text {
  margin-left: 4px;
}
</style>
