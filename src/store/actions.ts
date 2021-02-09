import { ActionContext } from "vuex";
import Weather from "@/classes/Weather";
import StateInterface from "@/types/interfaces/StateInterface";
import parse from "@/store/utils/parse";
import createWeatherObject from "@/store/utils/createWeatherObject";
import composeUrl from "@/store/utils/composeUrl";

const actions = {
  remove(
    { commit }: ActionContext<StateInterface, StateInterface>,
    location: string
  ) {
    commit("removeLocation", location);
    commit("removeWeather", location);
  },

  setLocationList(
    { state, commit }: ActionContext<StateInterface, StateInterface>,
    locationList: string[]
  ) {
    const weatherList = state.list;
    weatherList.sort((a: any, b: any) => {
      return (
        locationList.indexOf(a.location) - locationList.indexOf(b.location)
      );
    });

    commit("setLocationList", locationList);
    commit("setList", weatherList);
  },

  searchWeather(
    { commit, dispatch }: ActionContext<StateInterface, StateInterface>,
    location: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      dispatch("fetch", location)
        .then((weather: Weather) => {
          commit("addLocation", weather.location);
          resolve(weather.location);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  },

  fetch(
    { getters, commit }: ActionContext<StateInterface, StateInterface>,
    location: string
  ): Promise<any> {
    const url = composeUrl(location, getters.apiKey);
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(parse)
        .then(createWeatherObject)
        .then((weather: Weather) => {
          commit("add", weather);
          resolve(weather);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default actions;
