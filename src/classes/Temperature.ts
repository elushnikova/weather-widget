import PhysicalQuantity from "@/classes/PhysicalQuantity";
import TemperatureInterface from "@/types/interfaces/TemperatureInterface";
import TemperatureUnit from "@/assets/units/TemperatureUnit";

class Temperature extends PhysicalQuantity implements TemperatureInterface {
  constructor(value: number, unit: TemperatureUnit) {
    super(value, unit);
  }
}

export default Temperature;
