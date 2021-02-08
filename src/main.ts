import Vue from "vue";
import store from "@/store/";
import App from "@/App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  render: function(createElement) {
    return createElement(App);
  },
}).$mount("#weather-widget");
