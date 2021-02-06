<template>
  <transition name="fade">
    <div class="ww-view" v-if="show" :key="name">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppView",

  props: {
    name: { type: String, required: true },
    show: { type: Boolean, required: true }
  }
});
</script>

<style lang="scss">
.ww-view {
  position: absolute;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity, transform;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
