import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import store from "@/store/";
import App from "@/App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  render: function(createElement) {
    return createElement(App, {
      props: {
        apiKey: "d685c708cd4f9709928c921bec3bd482",
      },
    });
  },
}).$mount("weather-widget");

const WeatherWidget = wrap(Vue, App);
window.customElements.define("weather-widget", WeatherWidget as any);
