<template>
  <app-card>
    <app-card-title>
      Add Location:
    </app-card-title>

    <app-card-content>
      <search-form />
    </app-card-content>
  </app-card>
</template>

<script lang="ts">
import Vue from "vue";

import AppCard from "@/components/AppCard.vue";
import AppCardContent from "@/components/AppCardContent.vue";
import AppCardTitle from "@/components/AppCardTitle.vue";
import SearchForm from "@/components/SearchForm.vue";

export default Vue.extend({
  name: "SearchCard",

  components: {
    AppCard,
    AppCardContent,
    AppCardTitle,
    SearchForm
  }
});
</script>
