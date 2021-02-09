import getters from "@/store/getters";
import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";
import StateInterface from "@/types/interfaces/StateInterface";

const mockWeather = new Weather(weatherItem);
const state: StateInterface = {
  apiKey: "",
  weatherList: [mockWeather],
  locationList: [mockWeather.location]
};

describe("getters.weatherList", () => {
  it("returns state.weatherList without modifications", () => {
    const expected = [mockWeather];
    const result = getters.weatherList(state);
    expect(result).toStrictEqual(expected);
  });
});
