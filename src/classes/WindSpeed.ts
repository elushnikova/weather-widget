import BeaufortScale from "@/types/BeaufortScale";
import ErrorText from "@/types/ErrorText";
import PhysicalQuantity from "@/classes/PhysicalQuantity";
import SpeedUnit from "@/types/units/SpeedUnit";
import WindSpeedInterface from "@/types/interfaces/WindSpeedInterface";

class WindSpeed extends PhysicalQuantity implements WindSpeedInterface {
  constructor(value: number) {
    if (value < 0) {
      throw new Error(ErrorText.InvalidWindSpeed);
    }
    
    super(value, SpeedUnit.MetrePerSecond);
  }

  toBeaufort() {
    for (const item of BeaufortScale.values()) {
      if (this.value <= item.maxSpeed) {
        return item.description;
      }
    }

    return ""; // Is never to be executed
  }
}

export default WindSpeed;
