<template>
  <app-card>
    <app-card-title>
      Settings
    </app-card-title>

    <app-card-content>
      <draggable
        v-if="list.length"
        tag="ul"
        :list="list"
        handle=".js-drag"
        class="ww-list"
      >
        <city-list-item
          v-for="weather in list"
          :key="weather.location"
          :item="weather"
        />
      </draggable>

      <p v-else>Please, add your location below.</p>
    </app-card-content>
  </app-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
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

  computed: {
    list: {
      get() {
        return this.$store.getters.weatherList;
      },

      set(list) {
        this.setList(list);
      }
    }
  },

  methods: {
    ...mapMutations({
      setList: "setList"
    })
  }
});
</script>
