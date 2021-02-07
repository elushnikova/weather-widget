<template>
  <app-view :show="show" name="settings">
    <app-btn view @click="$emit('change-view')">
      <app-icon :slug="IconSlug.Close" :size="20" />
    </app-btn>

    <settings-card />
    <search-card />
  </app-view>
</template>

<script lang="ts">
import Vue from "vue";

import AppBtn from "@/components/AppBtn.vue";
import AppIcon from "@/components/AppIcon.vue";
import AppView from "@/components/AppView.vue";
import SettingsCard from "@/components/SettingsCard.vue";
import SearchCard from "@/components/SearchCard.vue";

import IconSlug from "@/assets/IconSlug";

export default Vue.extend({
  name: "SettingsView",

  components: {
    AppBtn,
    AppIcon,
    AppView,
    SettingsCard,
    SearchCard
  },

  props: {
    show: { type: Boolean, required: true }
  },

  data() {
    return {
      IconSlug
    };
  }
});
</script>
