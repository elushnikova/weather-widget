import Weather from "@/classes/Weather";
import WeatherApiInterface from "@/interfaces/WeatherApiInterface";

function createWeatherObject(data: WeatherApiInterface): Weather {
  return new Weather(data);
}

export default createWeatherObject;
