<template>
  <app-view :show="show" name="index">
    <app-btn view @click="$emit('change-view')">
      <app-icon :slug="IconSlug.Settings" :size="20" />
    </app-btn>

    <weather-card
      v-for="weather in items"
      :weather="weather"
      :key="weather.cityId"
    />
  </app-view>
</template>

<script lang="ts">
import Vue from "vue";

import AppBtn from "@/components/AppBtn.vue";
import AppIcon from "@/components/AppIcon.vue";
import AppView from "@/components/AppView.vue";
import WeatherCard from "@/components/WeatherCard.vue";

import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";

import IconSlug from "@/assets/IconSlug";

export default Vue.extend({
  name: "IndexView",

  components: {
    AppBtn,
    AppIcon,
    AppView,
    WeatherCard
  },

  props: {
    show: { type: Boolean, required: true }
  },

  data() {
    return {
      IconSlug,
      rawItems: [weatherItem, { ...weatherItem, id: 123 }]
    };
  },

  computed: {
    items(): Weather[] {
      return this.rawItems.map(i => new Weather(i));
    }
  }
});
</script>
