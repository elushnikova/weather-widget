import Temperature from "@/classes/Temperature";
import TemperatureUnit from "@/assets/units/TemperatureUnit";

class CelsiusTemperature extends Temperature {
  constructor(kelvinValue: number) {
    const celsiusValue = kelvinValue - 273.15;
    super(celsiusValue, TemperatureUnit.DegreeCelsius);
  }
}

export default CelsiusTemperature;
