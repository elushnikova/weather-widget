import TemperatureInterface from "@/types/TemperatureInterface";
import TemperatureUnit from "@/types/TemperatureUnit";

class Temperature implements TemperatureInterface {
  unit = TemperatureUnit.Kelvin;
  value: number;

  constructor(value: number) {
    this.value = Number(value.toFixed(2));
  }

  toString() {
    return this.value + this.unit;
  }
}

export default Temperature;
