import Vue from "vue";
import Vuex from "vuex";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import plugins from "@/store/plugins";
import STORAGE_KEY from "@/store/utils/storageKey";
import StateInterface from "@/types/interfaces/StateInterface";

Vue.use(Vuex);

const state: StateInterface = {
  apiKey: "",
  list: [],
  locationList: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]"),
};

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins,
});

export default store;
