import PhysicalQuantity from "@/classes/PhysicalQuantity";
import TemperatureInterface from "@/types/TemperatureInterface";
import TemperatureUnit from "@/types/TemperatureUnit";

class Temperature extends PhysicalQuantity implements TemperatureInterface {
  constructor(value: number, unit: TemperatureUnit) {
    const roundedValue = Number(value.toFixed(2));
    super(roundedValue, unit);
  }
}

export default Temperature;
