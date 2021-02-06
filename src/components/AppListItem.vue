<template>
  <li
    class="ww-list__item"
    :class="{
      'ww-list__item--half': half,
      'ww-list__item--no-padding': noPadding,
      'ww-list__item--block': block
    }"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppListItem",

  props: {
    half: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false },
    block: { type: Boolean, default: false }
  }
});
</script>

<style lang="scss">
.ww-list__item {
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
}

.ww-list__item:not(.ww-list__item--no-padding) {
  padding-top: 4px;
  padding-bottom: 4px;
}

.ww-list__item--half {
  flex-basis: 50%;
}

.ww-list__item--block {
  background-color: whitesmoke;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:not(.ww-list__item--no-padding) {
    padding-left: 4px;
    padding-right: 4px;
  }
}
</style>
