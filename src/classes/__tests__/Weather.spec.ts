import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";
import TemperatureUnit from "@/assets/units/TemperatureUnit";
import DistanceUnit from "@/assets/units/DistanceUnit";
import WeatherApiInterface from "@/types/interfaces/WeatherApiInterface";

function lossyDeepClone(item: any) {
  return JSON.parse(JSON.stringify(item));
}

describe("Weather", () => {
  let w: Weather;
  let input: WeatherApiInterface;

  beforeAll(() => {
    w = new Weather(weatherItem);
  });

  beforeEach(() => {
    input = lossyDeepClone(weatherItem);
  });

  it("composes location from city name and country", () => {
    expect(weatherItem.name).toBe("Saint Petersburg");
    expect(weatherItem.sys.country).toBe("RU");
    expect(w.location).toBe("Saint Petersburg, RU");
  });

  it("composes image url from weather icon code", () => {
    const iconCode = weatherItem.weather[0].icon;
    const expected = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    expect(w.image).toBe(expected);
  });

  it("converts description to sentence case", () => {
    expect(weatherItem.weather[0].description).toBe("light snow");
    expect(w.description).toBe("Light snow");
  });

  it("converts temperature to degrees Celsius", () => {
    expect(weatherItem.main.temp).toBe(273.15);
    expect(w.temperature.value).toBe(0);
    expect(w.temperature.unit).toBe(TemperatureUnit.DegreeCelsius);
  });

  it("rounds temperature value to integer", () => {
    input.main.temp = 300.123456;
    const testObject = new Weather(input);
    expect(testObject.temperature.value).toBe(27);
  });

  it("converts 'feels like' temperature to degrees Celsius", () => {
    expect(weatherItem.main.feels_like).toBe(268.92);
    expect(w.feelsLike.value).toBe(-4);
    expect(w.feelsLike.unit).toBe(TemperatureUnit.DegreeCelsius);
  });

  it("rounds 'feels like' temperature value to integer", () => {
    input.main.feels_like = 300.123456;
    const testObject = new Weather(input);
    expect(testObject.feelsLike.value).toBe(27);
  });

  it("rounds wind speed value to 1 decimal place", () => {
    input.wind.speed = 5.123456;
    const testObject = new Weather(input);
    expect(testObject.wind.speed.value).toBe(5.1);
  });

  it("rounds humidity value to integer", () => {
    input.main.humidity = 90.123456;
    const testObject = new Weather(input);
    expect(testObject.humidity.value).toBe(90);
  });

  it("converts visibility to kilometres", () => {
    expect(w.visibility.unit).toBe(DistanceUnit.Kilometre);
  });

  it("rounds visibility value to 1 decimal place", () => {
    input.visibility = 12345.6789;
    const testObject = new Weather(input);
    expect(testObject.visibility.value).toBe(12.3);
  });

  it("composes summary from feelsLike temperature, weather description, and wind description from Beaufort scale", () => {
    const expected = `Feels like ${w.feelsLike.toString()}. ${
      w.description
    }. ${w.wind.speed.toBeaufort()}`;
    expect(w.summary()).toBe(expected);
  });

  it("calculates dew point temperature and rounds it to 1 decimal place", () => {
    const dewPoint = w.dewPoint();
    expect(w.temperature.value).toBe(0);
    expect(w.humidity.value).toBe(93);
    expect(dewPoint.value).toBe(-1);
  });

  it("intends to calculate dew point temperature using Magnus formula, if humidity =< 50%, but for now still uses simple approximation", () => {
    input.main.humidity = 10;
    const testObject = new Weather(input);
    const dewPoint = testObject.dewPoint();
    expect(testObject.temperature.value).toBe(0);
    expect(testObject.humidity.value).toBe(10);
    expect(dewPoint.value).toBe(-18);
  });
});
