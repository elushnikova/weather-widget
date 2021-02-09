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

  addWeather({ weatherList }: StateInterface, item: Weather): void {
    const index = weatherList.findIndex((i) => i.cityId === item.cityId);
    const isDuplicate = index >= 0;

    if (isDuplicate) {
      throw new Error(ErrorText.ItemIsDuplicate);
    }

    weatherList.push(item);
  },

  removeWeather({ weatherList }: StateInterface, location: string): void {
    const index = weatherList.findIndex((i) => i.location === location);
    const notFound = index < 0;

    if (notFound) {
      throw new Error(ErrorText.ItemNotFound);
    }

    weatherList.splice(index, 1);
  },

  addLocation({ locationList }: StateInterface, item: string): void {
    locationList.push(item);
  },

  removeLocation({ locationList }: StateInterface, item: string): void {
    const index = locationList.indexOf(item);
    const notFound = index < 0;

    if (notFound) {
      throw new Error(ErrorText.ItemNotFound);
    }

    locationList.splice(index, 1);
  },

  sortWeatherList({ weatherList, locationList }: StateInterface): void {
    const byLocationOrder = (a: Weather, b: Weather) =>
      locationList.indexOf(a.location) - locationList.indexOf(b.location);

    weatherList.sort(byLocationOrder);
  },
};

export default mutations;
