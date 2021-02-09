import Weather from "@/classes/Weather";

interface StateInterface {
  apiKey: string;
  weatherList: Weather[];
  locationList: string[];
}

export default StateInterface;
