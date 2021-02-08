import Vue from "vue";
import Weather from "@/classes/Weather";
import StateInterface from "@/types/interfaces/StateInterface";
import ErrorText from "@/assets/ErrorText";

const mutations = {
  setKey(state: StateInterface, apiKey: string): void {
    state.apiKey = apiKey;
  },

  setList(state: StateInterface, list: Weather[]): void {
    Vue.set(state, "list", [...list]);
  },

  setLocationList(state: StateInterface, locationList: string[]): void {
    Vue.set(state, "locationList", [...locationList]);
  },

  add(state: StateInterface, item: Weather): void {
    const index = state.list.findIndex((i) => i.cityId === item.cityId);
    const isDuplicate = index >= 0;

    if (isDuplicate) {
      throw new Error(ErrorText.ItemIsDuplicate);
    }

    state.list.push(item);
  },

  removeWeather(state: StateInterface, location: string): void {
    const index = state.list.findIndex((i) => i.location === location);
    const notFound = index < 0;

    if (notFound) {
      throw new Error(ErrorText.ItemNotFound);
    }

    state.list.splice(index, 1);
  },

  addLocation(state: StateInterface, item: string): void {
    state.locationList.push(item);
  },

  removeLocation(state: StateInterface, item: string): void {
    const index = state.locationList.indexOf(item);
    const notFound = index < 0;

    if (notFound) {
      throw new Error(ErrorText.ItemNotFound);
    }

    state.locationList.splice(index, 1);
  },
};

export default mutations;
