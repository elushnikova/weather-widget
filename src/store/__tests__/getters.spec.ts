import getters from "@/store/getters";
import City from "@/classes/City";
import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";
import StateInterface from "@/types/interfaces/StateInterface";

const mockWeather = new Weather(weatherItem);
const mockCity = new City(mockWeather);
const state: StateInterface = {
  apiKey: "",
  list: [mockWeather],
};

describe("getters.weatherList", () => {
  it("returns state.list without modifications", () => {
    const expected = [mockWeather];
    const result = getters.weatherList(state);
    expect(result).toStrictEqual(expected);
  });
});

describe("getters.cityList", () => {
  it("converts state.list to list of City class instances and returns it", () => {
    const expected = [mockCity];
    const result = getters.cityList(state);
    expect(result).toStrictEqual(expected);
  });
});
