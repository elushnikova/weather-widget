import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";
import createWeatherObject from "@/store/utils/createWeatherObject";

describe("createWeatherObject function", () => {
  it("converts API object to an instance of Weather class", () => {
    const expected = new Weather(weatherItem);
    const testInstance = createWeatherObject(weatherItem);
    expect(testInstance).toStrictEqual(expected);
  });
});
