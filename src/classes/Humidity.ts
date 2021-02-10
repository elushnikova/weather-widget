import ErrorText from "@/assets/ErrorText";
import HumidityInterface from "@/interfaces/quantities/HumidityInterface";
import HumidityUnit from "@/assets/units/HumidityUnit";
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
