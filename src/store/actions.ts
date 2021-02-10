import { ActionContext } from "vuex";
import Weather from "@/classes/Weather";
import StateInterface from "@/interfaces/StateInterface";
import parse from "@/store/utils/parse";
import createWeatherObject from "@/store/utils/createWeatherObject";
import ApiLocationUrl from "@/classes/url/ApiLocationUrl";

const actions = {
  remove(
    { commit }: ActionContext<StateInterface, StateInterface>,
    location: string
  ) {
    commit("removeLocation", location);
    commit("removeWeather", location);
  },

  setList(
    { commit }: ActionContext<StateInterface, StateInterface>,
    locationList: string[]
  ) {
    commit("setLocationList", locationList);
    commit("sortWeatherList");
  },

  searchLocation(
    { commit, dispatch }: ActionContext<StateInterface, StateInterface>,
    location: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      dispatch("fetchWeather", location)
        .then((weather: Weather) => {
          commit("addLocation", weather.location);
          resolve(weather.location);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  },

  fetchWeather(
    { commit }: ActionContext<StateInterface, StateInterface>,
    location: string
  ): Promise<any> {
    const u = new ApiLocationUrl(location);
    return new Promise((resolve, reject) => {
      fetch(u.fullUrl())
        .then(parse)
        .then(createWeatherObject)
        .then((weather: Weather) => {
          commit("addWeather", weather);
          resolve(weather);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default actions;
