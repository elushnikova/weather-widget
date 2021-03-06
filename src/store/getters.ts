import Weather from "@/classes/Weather";
import StateInterface from "@/interfaces/StateInterface";

const getters = {
  weatherList(state: StateInterface): Weather[] {
    return state.weatherList;
  },

  locationList(state: StateInterface): string[] {
    return state.locationList;
  },
};

export default getters;
