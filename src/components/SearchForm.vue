<template>
  <form class="ww-search" @submit.prevent="handleSubmit()">
    <input
      name="location"
      class="ww-search__input"
      type="text"
      v-model="location"
    />

    <app-btn class="ww-search__btn">
      <app-icon :slug="IconSlug.Search" />
    </app-btn>

    <transition name="fade">
      <output name="feedback" class="ww-search__output" v-if="feedback">
        {{ feedback }}
      </output>
    </transition>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

import AppBtn from "@/components/AppBtn.vue";
import AppIcon from "@/components/AppIcon.vue";

import IconSlug from "@/assets/IconSlug";
import ApiInputInterface from "@/types/interfaces/ApiInputInterface";

export default Vue.extend({
  name: "SearchForm",

  components: {
    AppBtn,
    AppIcon
  },

  data() {
    return {
      IconSlug,
      location: "",
      feedback: ""
    };
  },

  computed: {
    ...mapGetters({
      apiKey: "apiKey"
    }),

    input(): ApiInputInterface {
      return {
        apiKey: this.apiKey,
        location: this.location
      };
    }
  },

  methods: {
    ...mapActions({
      fetchWeather: "fetchWeather"
    }),

    ...mapMutations({
      add: "add"
    }),

    async handleSubmit() {
      await this.fetchWeather(this.input)
        .then(() => {
          this.showFeedback("Added successfully");
        })
        .catch(error => {
          this.showFeedback(error.message);
        });

      setTimeout(this.hideFeedback, 2000);
    },

    showFeedback(text: string): void {
      this.feedback = text;
    },

    hideFeedback(): void {
      this.feedback = "";
    }
  }
});
</script>

<style lang="scss">
.ww-search {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "input btn" "output output";
  grid-gap: 4px;
}

.ww-search__input {
  grid-area: input;
  width: 100%;
  display: block;
  box-sizing: border-box;
  border: 1px solid lightgrey;
  border-radius: 2px;
  transition: border-color 300ms;

  &:focus {
    outline: none;
    border-color: dodgerblue;
  }
}

.ww-search__btn {
  grid-area: btn;
}

.ww-search__output {
  grid-area: output;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
