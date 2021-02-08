import Vue from "vue";
import Vuex from "vuex";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import StateInterface from "@/types/interfaces/StateInterface";

Vue.use(Vuex);

const state: StateInterface = {
  apiKey: "",
  list: [],
};

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});

export default store;
