<template>
  <ul class="ww-list" :class="{ 'ww-list--row': row, 'ww-list--wrap': wrap }">
    <slot />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppList",

  props: {
    row: { type: Boolean, default: false },
    wrap: { type: Boolean, default: false }
  }
});
</script>

<style lang="scss">
.ww-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.ww-list--row {
  display: flex;
  align-items: center;
}

.ww-list--wrap {
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
