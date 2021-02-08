<template>
  <app-card>
    <app-card-title> Settings </app-card-title>

    <app-card-content>
      <draggable
        v-if="locationList.length"
        v-model="locationList"
        tag="ul"
        handle=".js-drag"
        class="ww-list"
      >
        <city-list-item
          v-for="location in locationList"
          :key="location"
          :item="location"
        />
      </draggable>

      <p v-else>Please, add your location below.</p>
    </app-card-content>
  </app-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import draggable from "vuedraggable";

import AppCard from "@/components/AppCard.vue";
import AppCardContent from "@/components/AppCardContent.vue";
import AppCardTitle from "@/components/AppCardTitle.vue";
import CityListItem from "@/components/CityListItem.vue";

export default Vue.extend({
  name: "SettingsCard",

  components: {
    AppCard,
    AppCardContent,
    AppCardTitle,
    CityListItem,
    draggable
  },

  methods: {
    ...mapActions({
      fetch: "fetch"
    })
  },

  computed: {
    ...mapGetters({
      apiKey: "apiKey"
    }),

    locationList: {
      get() {
        return this.$store.getters.locationList;
      },

      async set(value) {
        await this.$store.dispatch("setLocationList", value);
      }
    }
  }
});
</script>
