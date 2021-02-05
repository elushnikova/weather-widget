<template>
  <app-card>
    <app-card-title>
      {{ weather.location }}
    </app-card-title>

    <app-card-content no-padding>
      <app-list row>
        <app-list-item no-padding>
          <weather-image :url="weather.image" :alt="weather.name" />
        </app-list-item>

        <app-list-item no-padding>
          <weather-temperature>
            {{ weather.temperature.toString() }}
          </weather-temperature>
        </app-list-item>
      </app-list>
    </app-card-content>

    <app-card-content>
      <app-text>
        {{ weather.summary() }}
      </app-text>

      <app-list row wrap>
        <app-list-item half>
          <app-icon :slug="IconSlug.Wind" :rotate="weather.wind.degree" />
          <app-icon-text>{{ weather.wind.speed.toString() }}</app-icon-text>
        </app-list-item>

        <app-list-item half>
          <app-icon :slug="IconSlug.Pressure" />
          <app-icon-text>{{ weather.pressure.toString() }}</app-icon-text>
        </app-list-item>

        <app-list-item half>
          {{ "Humidity: " + weather.humidity.toString() }}
        </app-list-item>

        <app-list-item half>
          {{ "Dew point: " + weather.dewPoint().toString() }}
        </app-list-item>

        <app-list-item>
          {{ "Visibility: " + weather.visibility.toFixedString(1) }}
        </app-list-item>
      </app-list>
    </app-card-content>
  </app-card>
</template>

<script lang="ts">
import Vue from "vue";

import AppCard from "@/components/AppCard.vue";
import AppCardContent from "@/components/AppCardContent.vue";
import AppCardTitle from "@/components/AppCardTitle.vue";
import AppIcon from "@/components/AppIcon.vue";
import AppIconText from "@/components/AppIconText.vue";
import AppList from "@/components/AppList.vue";
import AppListItem from "@/components/AppListItem.vue";
import AppText from "@/components/AppText.vue";
import WeatherImage from "@/components/WeatherImage.vue";
import WeatherTemperature from "@/components/WeatherTemperature.vue";

import IconSlug from "@/assets/IconSlug";

export default Vue.extend({
  name: "WeatherCard",

  components: {
    AppCard,
    AppCardContent,
    AppCardTitle,
    AppIcon,
    AppIconText,
    AppList,
    AppListItem,
    AppText,
    WeatherImage,
    WeatherTemperature
  },

  data() {
    return {
      IconSlug
    };
  },

  props: {
    /** @todo Validate that it's an instance of Weather class */
    weather: { type: Object, required: true }
  }
});
</script>
