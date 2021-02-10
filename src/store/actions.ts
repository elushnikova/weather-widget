import { ActionContext } from "vuex";
import Weather from "@/classes/Weather";
import StateInterface from "@/interfaces/StateInterface";
import parse from "@/store/utils/parse";
import createWeatherObject from "@/store/utils/createWeatherObject";
import ApiLocationUrl from "@/classes/url/ApiLocationUrl";
import ApiCoordsUrl from "@/classes/url/ApiCoordsUrl";
import ApiCoordsType from "@/types/ApiCoordsType";

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
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      dispatch("fetchByLocation", location)
        .then((weather: Weather) => {
          commit("addLocation", weather.location);
          resolve(weather.location);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  },

  /** @fixme Merge with searchLocation */
  fetchByLocation(
    { dispatch }: ActionContext<StateInterface, StateInterface>,
    location: string
  ): Promise<Weather> {
    const u = new ApiLocationUrl(location);
    return new Promise((resolve, reject) => {
      dispatch("fetchWeather", u.fullUrl())
        .then((weather: Weather) => {
          resolve(weather);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  },

  /** @todo Rename to searchCoords */
  fetchByCoords(
    { commit, dispatch }: ActionContext<StateInterface, StateInterface>,
    coords: ApiCoordsType
  ): Promise<void> {
    const u = new ApiCoordsUrl(coords);
    return new Promise((resolve, reject) => {
      dispatch("fetchWeather", u.fullUrl())
        .then((weather: Weather) => {
          commit("addLocation", weather.location);
          resolve();
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  },

  fetchWeather(
    { commit }: ActionContext<StateInterface, StateInterface>,
    url: string
  ): Promise<Weather> {
    return new Promise((resolve, reject) => {
      fetch(url)
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
