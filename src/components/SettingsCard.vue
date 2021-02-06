<template>
  <app-card>
    <app-card-title>
      Settings
    </app-card-title>

    <app-card-content>
      <app-list>
        <city-list-item />
        <city-list-item />
      </app-list>
    </app-card-content>
  </app-card>
</template>

<script lang="ts">
import Vue from "vue";

import AppCard from "@/components/AppCard.vue";
import AppCardContent from "@/components/AppCardContent.vue";
import AppCardTitle from "@/components/AppCardTitle.vue";
import AppList from "@/components/AppList.vue";
import CityListItem from "@/components/CityListItem.vue";

export default Vue.extend({
  name: "SettingsCard",

  components: {
    AppCard,
    AppCardContent,
    AppCardTitle,
    AppList,
    CityListItem
  }
});
</script>
