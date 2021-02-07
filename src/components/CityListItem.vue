<template>
  <transition name="fade" appear>
    <app-list-item block class="ww-city">
      <app-btn class="js-drag">
        <app-icon :slug="IconSlug.Drag" />
      </app-btn>

      <span class="ww-city__name">
        {{ item.location }}
      </span>

      <app-btn class="ww-right js-remove" @click="handleRemove()">
        <app-icon :slug="IconSlug.Remove" />
      </app-btn>
    </app-list-item>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

import AppListItem from "@/components/AppListItem.vue";
import AppBtn from "@/components/AppBtn.vue";
import AppIcon from "@/components/AppIcon.vue";

import IconSlug from "@/assets/IconSlug";

export default Vue.extend({
  name: "CityListItem",

  components: {
    AppListItem,
    AppBtn,
    AppIcon
  },

  props: {
    /** @todo Validate that it's an instance of Weather class */
    item: { type: Object, required: true }
  },

  data() {
    return {
      IconSlug
    };
  },

  methods: {
    ...mapMutations({
      remove: "remove"
    }),

    handleRemove() {
      this.remove(this.item);
    }
  }
});
</script>

<style lang="scss">
.ww-city {
  display: flex;
  align-items: center;
}

.ww-city__name {
  margin-left: 4px;
  margin-right: 4px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ww-right {
  margin-left: auto;
}
</style>
