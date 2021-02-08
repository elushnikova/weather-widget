import { ActionContext } from "vuex";
import Weather from "@/classes/Weather";
import StateInterface from "@/types/interfaces/StateInterface";
import ApiInputInterface from "@/types/interfaces/ApiInputInterface";
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

  fetchWeather(
    { commit, dispatch }: ActionContext<StateInterface, StateInterface>,
    input: ApiInputInterface
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      dispatch("fetch", input)
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
    { commit }: ActionContext<StateInterface, StateInterface>,
    input: ApiInputInterface
  ): Promise<any> {
    const url = composeUrl(input);
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
