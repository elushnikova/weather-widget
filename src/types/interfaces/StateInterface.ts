import Weather from "@/classes/Weather";

interface StateInterface {
  apiKey: string;
  list: Weather[];
  locationList: string[];
}

export default StateInterface;
