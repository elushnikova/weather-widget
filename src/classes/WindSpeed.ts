import BeaufortScale from "@/assets/BeaufortScale";
import ErrorText from "@/assets/ErrorText";
import PhysicalQuantity from "@/classes/PhysicalQuantity";
import SpeedUnit from "@/assets/units/SpeedUnit";
import WindSpeedInterface from "@/interfaces/quantities/WindSpeedInterface";

class WindSpeed extends PhysicalQuantity implements WindSpeedInterface {
  constructor(value: number) {
    if (value < 0) {
      throw new Error(ErrorText.InvalidWindSpeed);
    }
    
    super(value, SpeedUnit.MetrePerSecond);
  }

  toBeaufort(): string {
    for (const item of BeaufortScale.values()) {
      if (this.value <= item.maxSpeed) {
        return item.description;
      }
    }

    return ""; // Is never to be executed
  }
}

export default WindSpeed;
