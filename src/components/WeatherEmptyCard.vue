<template>
  <app-card>
    <app-card-title>
      No location
    </app-card-title>

    <app-card-content>
      <p>Please, open Settings to add your location.</p>
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

  components: {
    AppCard,
    AppCardTitle,
    AppCardContent
  }
});
</script>
