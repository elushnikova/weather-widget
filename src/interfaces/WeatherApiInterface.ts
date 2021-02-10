interface WeatherSubItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WeatherApiInterface {
  id: number;
  name: string;
  timezone: number;
  cod: number;
  dt: number;
  coord: {
    lon: number;
    lat: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  base: string;
  weather: WeatherSubItem[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  snow: object;
  clouds: object;
}

export default WeatherApiInterface;
