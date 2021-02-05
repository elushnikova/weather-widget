import WeatherApiInterface from "@/types/interfaces/WeatherApiInterface";

const weatherItem: WeatherApiInterface = {
  coord: {
    lon: 30.2642,
    lat: 59.8944,
  },
  weather: [
    {
      id: 600,
      main: "Snow",
      description: "light snow",
      icon: "13n",
    },
  ],
  base: "stations",
  main: {
    temp: 273.15,
    feels_like: 268.92,
    temp_min: 273.15,
    temp_max: 273.15,
    pressure: 987,
    humidity: 93,
  },
  visibility: 10000,
  wind: {
    speed: 3,
    deg: 70,
  },
  snow: {
    "1h": 0.37,
  },
  clouds: {
    all: 90,
  },
  dt: 1611940824,
  sys: {
    type: 1,
    id: 8926,
    country: "RU",
    sunrise: 1611901144,
    sunset: 1611929093,
  },
  timezone: 10800,
  id: 498817,
  name: "Saint Petersburg",
  cod: 200,
};

export default weatherItem;
