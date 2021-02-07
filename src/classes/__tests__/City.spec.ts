import City from "@/classes/City";
import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";

describe("City", () => {
  let city: City;
  let weather: Weather;

  beforeAll(() => {
    weather = new Weather(weatherItem);
    city = new City(weather);
  });

  it("parses name and country from weather location", () => {
    expect(weather.location).toBe("Saint Petersburg, RU");
    expect(city.name).toBe("Saint Petersburg");
    expect(city.country).toBe("RU");
  });

  it("can be converted back to string", () => {
    expect(city.toString()).toBe("Saint Petersburg, RU");
  });
});
