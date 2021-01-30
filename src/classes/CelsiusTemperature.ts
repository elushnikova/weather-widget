import Temperature from "@/classes/Temperature";
import TemperatureUnit from "@/types/TemperatureUnit";

class CelsiusTemperature extends Temperature {
  unit = TemperatureUnit.DegreeCelsius;

  constructor(kelvinValue: number) {
    super(kelvinValue - 273.15);
  }
}

export default CelsiusTemperature;
