import City from "@/classes/City";
import Weather from "@/classes/Weather";
import StateInterface from "@/types/interfaces/StateInterface";

const getters = {
  apiKey(state: StateInterface): string {
    return state.apiKey;
  },

  weatherList(state: StateInterface): Weather[] {
    return state.list;
  },

  /** @deprecated */
  cityList(state: StateInterface): City[] {
    return state.list.map((item: Weather) => new City(item));
  },
};

export default getters;
