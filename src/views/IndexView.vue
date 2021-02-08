<template>
  <app-view :show="show" name="index">
    <app-btn view @click="$emit('change-view')">
      <app-icon :slug="IconSlug.Settings" :size="20" />
    </app-btn>

    <template v-if="items.length">
      <weather-card
        v-for="weather in items"
        :weather="weather"
        :key="weather.cityId"
      />
    </template>

    <weather-empty-card v-else />
  </app-view>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

import AppBtn from "@/components/AppBtn.vue";
import AppIcon from "@/components/AppIcon.vue";
import AppView from "@/components/AppView.vue";
import WeatherCard from "@/components/WeatherCard.vue";
import WeatherEmptyCard from "@/components/WeatherEmptyCard.vue";

import IconSlug from "@/assets/IconSlug";
import ApiInputInterface from "@/types/interfaces/ApiInputInterface";
import Weather from "@/classes/Weather";

export default Vue.extend({
  name: "IndexView",

  components: {
    AppBtn,
    AppIcon,
    AppView,
    WeatherCard,
    WeatherEmptyCard
  },

  props: {
    show: { type: Boolean, required: true }
  },

  data() {
    return {
      IconSlug
    };
  },

  computed: {
    ...mapGetters({
      items: "weatherList",
      locations: "locationList",
      apiKey: "apiKey"
    })
  },

  methods: {
    ...mapActions({
      fetch: "fetch"
    }),

    ...mapMutations({
      removeWeather: "removeWeather"
    }),

    composeInput(location: string): ApiInputInterface {
      return {
        apiKey: this.apiKey,
        location
      };
    },

    removeDuplicate(location: string): void {
      const isDuplicate = this.items.find(
        (item: Weather) => item.location === location
      );

      if (isDuplicate) {
        this.removeWeather(location);
      }
    }

    // async syncLocation(location: string): Promise<void> {
    //   this.removeDuplicate(location);
    //   const input = this.composeInput(location);
    //   await this.fetch(input);
    // }
  },

  async created() {
    await this.locations.forEach(async (location: string) => {
      this.removeDuplicate(location);
      const input = this.composeInput(location);
      await this.fetch(input);
    });
  }
});
</script>
