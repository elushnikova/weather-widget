import Vue from "vue";
import store from "@/store/";
import WeatherWidget from "@/WeatherWidget.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  render: function(createElement) {
    return createElement(WeatherWidget, {
      props: {
        apiKey: "TODO: Take from .env or supply directly",
      },
    });
  },
}).$mount("#weather-widget");
