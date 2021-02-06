import Vue from "vue";
import WeatherWidget from "@/WeatherWidget.vue";

Vue.config.productionTip = false;

new Vue({
  render: function(createElement) {
    return createElement(WeatherWidget, {
      props: {
        apiKey: "TODO: Take from .env or supply directly",
      },
    });
  },
}).$mount("#weather-widget");
