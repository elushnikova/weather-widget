import CelsiusTemperature from "@/classes/CelsiusTemperature";
import Humidity from "@/classes/Humidity";
import Pressure from "@/classes/Pressure";
import Visibility from "@/classes/Visibility";
import WindSpeed from "@/classes/WindSpeed";

interface WeatherInterface {
  cityId: number;
  location: string;
  image: string;
  name: string;
  description: string;
  temperature: CelsiusTemperature;
  feelsLike: CelsiusTemperature;
  wind: {
    speed: WindSpeed;
    degree: number;
  };
  pressure: Pressure;
  humidity: Humidity;
  visibility: Visibility;

  summary(): string;
  dewPoint(): CelsiusTemperature;
}

export default WeatherInterface;
