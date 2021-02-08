import getters from "@/store/getters";
import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";
import StateInterface from "@/types/interfaces/StateInterface";

const mockWeather = new Weather(weatherItem);
const state: StateInterface = {
  apiKey: "",
  list: [mockWeather],
  locationList: [mockWeather.location]
};

describe("getters.weatherList", () => {
  it("returns state.list without modifications", () => {
    const expected = [mockWeather];
    const result = getters.weatherList(state);
    expect(result).toStrictEqual(expected);
  });
});
