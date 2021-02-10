import mutations from "@/store/mutations";
import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";
import StateInterface from "@/interfaces/StateInterface";
import ErrorText from "@/assets/ErrorText";

const mockW1 = new Weather(weatherItem);
const mockW2 = new Weather({
  ...weatherItem,
  id: 2,
  name: "Moscow",
  sys: { ...weatherItem.sys, country: "RU" },
});
const mockW3 = new Weather({
  ...weatherItem,
  id: 3,
  name: "Tashkent",
  sys: { ...weatherItem.sys, country: "UZ" },
});
const mockW4 = new Weather({
  ...weatherItem,
  id: 4,
  name: "Samarkand",
  sys: { ...weatherItem.sys, country: "UZ" },
});

let state: StateInterface;

describe("mutations.addWeather", () => {
  beforeEach(() => {
    setupState();
  });

  it("adds weather item to state.weatherList", () => {
    const expected = [mockW1, mockW2, mockW3, mockW4];
    mutations.addWeather(state, mockW4);
    expect(state.weatherList).toStrictEqual(expected);
  });

  it("throws error if item is already in the list", () => {
    expect(state.weatherList).toStrictEqual([mockW1, mockW2, mockW3]);

    const invalidCall = () => {
      mutations.addWeather(state, mockW1);
    };

    expect(invalidCall).toThrow(ErrorText.ItemIsDuplicate);
  });
});

describe("mutations.removeWeather", () => {
  beforeEach(() => {
    setupState();
  });

  it("removes weather item from state.weatherList", () => {
    const expected = [mockW1, mockW3];
    mutations.removeWeather(state, mockW2.location);
    expect(state.weatherList).toStrictEqual(expected);
  });

  it("throws error if item isn't in the list", () => {
    expect(state.weatherList).toStrictEqual([mockW1, mockW2, mockW3]);

    const invalidCall = () => {
      mutations.removeWeather(state, mockW4.location);
    };

    expect(invalidCall).toThrow(ErrorText.ItemNotFound);
  });
});

function setupState() {
  state = {
    weatherList: [mockW1, mockW2, mockW3],
    locationList: [mockW1.location, mockW2.location, mockW3.location],
  };
}
