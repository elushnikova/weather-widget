import PhysicalQuantity from "@/classes/PhysicalQuantity";
import TemperatureInterface from "@/interfaces/quantities/TemperatureInterface";
import TemperatureUnit from "@/assets/units/TemperatureUnit";

class Temperature extends PhysicalQuantity implements TemperatureInterface {
  constructor(value: number, unit: TemperatureUnit) {
    super(value, unit);
  }
}

export default Temperature;
