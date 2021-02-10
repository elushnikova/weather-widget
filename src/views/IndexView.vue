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

    <weather-empty-card
      v-else
      @share-location="shareLocation()"
      :error="error"
    />
  </app-view>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

import AppBtn from "@/components/AppBtn.vue";
import AppIcon from "@/components/AppIcon.vue";
import AppView from "@/components/AppView.vue";
import WeatherCard from "@/components/WeatherCard.vue";
import WeatherEmptyCard from "@/components/WeatherEmptyCard.vue";

import IconSlug from "@/assets/IconSlug";
import ErrorText from "@/assets/ErrorText";
import ApiCoordsType from "@/types/ApiCoordsType";

import GeolocationPosition from "@/interfaces/geo/GeolocationPosition";
import GeolocationPositionError from "@/interfaces/geo/GeolocationPositionError";

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
      IconSlug,
      error: ""
    };
  },

  computed: {
    ...mapGetters(["weatherList", "locationList"]),

    hasLocations(): boolean {
      return this.locationList.length;
    },

    supportsGeolocation(): boolean {
      return "geolocation" in navigator;
    }
  },

  methods: {
    ...mapActions(["fetchByLocation", "fetchByCoords"]),

    processLocationList() {
      this.locationList.forEach(async (location: string) => {
        await this.fetchByLocation(location);
      });
    },

    getCurrentPosition(): Promise<ApiCoordsType> {
      return new Promise((resolve, reject) => {
        if (!this.supportsGeolocation) {
          reject(ErrorText.NoGeolocation);
        }

        const successCallback = (position: GeolocationPosition) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        };

        const errorCallback = (error: GeolocationPositionError) => {
          reject(error.message);
        };

        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
      });
    },

    handleError(error: string) {
      this.error = error;
    },

    async shareLocation() {
      await this.getCurrentPosition()
        .then(this.fetchByCoords)
        .catch(this.handleError);
    }
  },

  created() {
    if (this.hasLocations) {
      this.processLocationList();
    } else {
      this.shareLocation();
    }
  }
});
</script>
