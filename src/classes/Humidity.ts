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

    super(value, HumidityUnit.Percentage);
  }
}

export default Humidity;
