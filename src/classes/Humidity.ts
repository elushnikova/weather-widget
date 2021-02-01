import ErrorText from "@/types/ErrorText";
import HumidityInterface from "@/types/interfaces/HumidityInterface";
import HumidityUnit from "@/types/units/HumidityUnit";
import PhysicalQuantity from "@/classes/PhysicalQuantity";

class Humidity extends PhysicalQuantity implements HumidityInterface {
  constructor(value: number) {
    if (value < 0) {
      throw new Error(ErrorText.InvalidHumidity);
    }

    if (value > 100) {
      throw new Error(ErrorText.InvalidHumidity);
    }

    const roundedValue = Number(value.toFixed(0));
    super(roundedValue, HumidityUnit.Percentage);
  }
}

export default Humidity;
