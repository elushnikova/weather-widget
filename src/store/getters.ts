import Weather from "@/classes/Weather";
import StateInterface from "@/types/interfaces/StateInterface";

const getters = {
  apiKey(state: StateInterface): string {
    return state.apiKey;
  },

  weatherList(state: StateInterface): Weather[] {
    return state.list;
  },

  locationList(state: StateInterface): string[] {
    return state.locationList;
  }
};

export default getters;
