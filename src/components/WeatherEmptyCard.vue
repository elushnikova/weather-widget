<template>
  <app-card>
    <app-card-title> No location </app-card-title>

    <app-card-content>
      <p>
        Please, click the button below or open Settings to add your location.
      </p>

      <button @click="$emit('share-location')">Share my location</button>

      <transition name="fade">
        <p v-if="error" class="ww-error">
          {{ error }}
        </p>
      </transition>
    </app-card-content>
  </app-card>
</template>

<script lang="ts">
import Vue from "vue";

import AppCard from "@/components/AppCard.vue";
import AppCardContent from "@/components/AppCardContent.vue";
import AppCardTitle from "@/components/AppCardTitle.vue";

export default Vue.extend({
  name: "WeatherEmptyCard",

  props: {
    error: { type: String, default: "" }
  },

  components: {
    AppCard,
    AppCardTitle,
    AppCardContent
  }
});
</script>

<style lang="scss">
.ww-error {
  color: red;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
