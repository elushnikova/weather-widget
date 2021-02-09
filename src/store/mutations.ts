import Vue from "vue";
import Weather from "@/classes/Weather";
import StateInterface from "@/types/interfaces/StateInterface";
import ErrorText from "@/assets/ErrorText";

const mutations = {
  setWeatherList(state: StateInterface, weatherList: Weather[]): void {
    Vue.set(state, "weatherList", [...weatherList]);
  },

  setLocationList(state: StateInterface, locationList: string[]): void {
    Vue.set(state, "locationList", [...locationList]);
  },

  addWeather(state: StateInterface, item: Weather): void {
    const index = state.weatherList.findIndex((i) => i.cityId === item.cityId);
    const isDuplicate = index >= 0;

    if (isDuplicate) {
      throw new Error(ErrorText.ItemIsDuplicate);
    }

    state.weatherList.push(item);
  },

  removeWeather(state: StateInterface, location: string): void {
    const index = state.weatherList.findIndex((i) => i.location === location);
    const notFound = index < 0;

    if (notFound) {
      throw new Error(ErrorText.ItemNotFound);
    }

    state.weatherList.splice(index, 1);
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
