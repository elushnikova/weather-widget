import Vue from "vue";
import store from "@/store/";
import WeatherWidget from "@/WeatherWidget.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  render: function(createElement) {
    return createElement(WeatherWidget, {
      props: {
        apiKey: "d685c708cd4f9709928c921bec3bd482",
      },
    });
  },
}).$mount("#weather-widget");
