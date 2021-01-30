import BeaufortScale from "@/types/BeaufortScale";
import ErrorText from "@/types/ErrorText";
import SpeedUnit from "@/types/SpeedUnit";
import WindSpeedInterface from "@/types/WindSpeedInterface";

class WindSpeed implements WindSpeedInterface {
  unit = SpeedUnit.MetrePerSecond;
  value: number;

  constructor(value: number) {
    if (value < 0) {
      throw new Error(ErrorText.InvalidWindSpeed);
    }

    this.value = Number(value.toFixed(1));
  }

  toString() {
    return this.value + this.unit;
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
