<template>
  <app-view :show="show" name="index">
    <app-btn view @click="$emit('change-view')">
      <app-icon :slug="IconSlug.Settings" :size="20" />
    </app-btn>

    <template v-if="weatherList.length">
      <weather-card
        v-for="weather in weatherList"
        :weather="weather"
        :key="weather.cityId"
      />
    </template>

    <weather-empty-card v-else />
  </app-view>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import AppBtn from "@/components/AppBtn.vue";
import AppIcon from "@/components/AppIcon.vue";
import AppView from "@/components/AppView.vue";
import WeatherCard from "@/components/WeatherCard.vue";
import WeatherEmptyCard from "@/components/WeatherEmptyCard.vue";

import IconSlug from "@/assets/IconSlug";
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
    ...mapGetters(["weatherList", "locationList"])
  },

  methods: {
    removeDuplicate(location: string): void {
      const isDuplicate = this.weatherList.find(
        (item: Weather) => item.location === location
      );

      if (isDuplicate) {
        this.$store.commit("removeWeather", location);
      }
    }
  },

  async created() {
    await this.locationList.forEach(async (location: string) => {
      this.removeDuplicate(location);
      await this.$store.dispatch("fetch", location);
    });
  }
});
</script>
