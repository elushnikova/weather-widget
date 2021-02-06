<template>
  <button
    class="ww-btn"
    :class="{ 'ww-btn--view': view }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppBtn",

  props: {
    view: { type: Boolean, default: false }
  }
});
</script>

<style lang="scss">
.ww-btn {
  box-sizing: border-box;
  padding: 4px;
  border-radius: 50%;
  border: 0;
  background-color: transparent;
  transition: background-color 300ms;

  &:focus {
    background-color: lightgrey;
    outline: none;
  }
}

.ww-btn--view {
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>
