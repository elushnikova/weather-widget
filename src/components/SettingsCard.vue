<template>
  <app-card>
    <app-card-title>
      Settings
    </app-card-title>

    <app-card-content>
      <app-list v-if="cities.length">
        <city-list-item
          v-for="city in cities"
          :key="city.toString()"
          :item="city"
        />
      </app-list>

      <p v-else>Please, add your location below.</p>
    </app-card-content>
  </app-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

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
  },

  computed: {
    ...mapGetters({
      cities: "cityList"
    })
  }
});
</script>
