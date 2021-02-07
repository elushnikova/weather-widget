import Weather from "@/classes/Weather";
import WeatherApiInterface from "@/types/interfaces/WeatherApiInterface";

function createWeatherObject(data: WeatherApiInterface): Weather {
  return new Weather(data);
}

export default createWeatherObject;
