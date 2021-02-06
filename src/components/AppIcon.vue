<template>
  <img
    v-if="isValid"
    class="ww-icon"
    :src="icon.url"
    :alt="icon.title"
    :width="size"
    :height="size"
    :style="rotate && `transform: rotate(${rotate}deg);`"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/classes/Icon";
import IconSlug from "@/assets/IconSlug";
import ErrorText from "@/assets/ErrorText";

export default Vue.extend({
  name: "AppIcon",

  props: {
    slug: { type: String, required: true },
    size: { type: Number, default: 16 },
    rotate: { type: Number, default: 0 }
  },

  computed: {
    isValid(): boolean {
      return Object.values(IconSlug).includes(this.slug as IconSlug);
    },

    icon(): Icon {
      if (this.isValid) {
        return new Icon(this.slug as IconSlug);
      } else {
        throw new Error(ErrorText.InvalidIconSlug);
      }
    }
  },

  methods: {
    validate(): void {
      if (!this.isValid) {
        throw this.icon;
      }
    }
  },

  created() {
    this.validate();
  }
});
</script>

<style lang="scss">
.ww-icon {
  display: block;
}
</style>
