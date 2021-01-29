const city = {
  coord: {
    lon: 30.2642,
    lat: 59.8944
  },
  weather: [
    {
      id: 600,
      main: "Snow",
      description: "light snow",
      icon: "13n"
    }
  ],
  base: "stations",
  main: {
    temp: 273.15,
    feels_like: 268.92, // eslint-disable-line @typescript-eslint/camelcase
    temp_min: 273.15, // eslint-disable-line @typescript-eslint/camelcase
    temp_max: 273.15, // eslint-disable-line @typescript-eslint/camelcase
    pressure: 987,
    humidity: 93
  },
  visibility: 10000,
  wind: {
    speed: 3,
    deg: 70
  },
  snow: {
    "1h": 0.37
  },
  clouds: {
    all: 90
  },
  dt: 1611940824,
  sys: {
    type: 1,
    id: 8926,
    country: "RU",
    sunrise: 1611901144,
    sunset: 1611929093
  },
  timezone: 10800,
  id: 498817,
  name: "Saint Petersburg",
  cod: 200
};

export default city;
