import { ActionContext } from "vuex";
import Weather from "@/classes/Weather";
import StateInterface from "@/types/interfaces/StateInterface";
import ApiInputInterface from "@/types/interfaces/ApiInputInterface";
import parse from "@/store/utils/parse";
import createWeatherObject from "@/store/utils/createWeatherObject";

const actions = {
  fetchWeather(
    { commit }: ActionContext<StateInterface, StateInterface>,
    { apiKey, location }: ApiInputInterface
  ): Promise<any> {
    const url =
      "https://api.openweathermap.org/data/2.5/weather" +
      `?q=${location}` +
      `&APPID=${apiKey}`;

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
