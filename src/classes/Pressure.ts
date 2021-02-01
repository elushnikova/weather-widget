import PressureInterface from "@/types/PressureInterface";
import PressureUnit from "@/types/PressureUnit";

class Pressure implements PressureInterface {
  unit = PressureUnit.HectoPascal;
  value: number;

  constructor(value: number) {
    this.value = Number(value.toFixed(0));
  }

  toString() {
    return this.value + this.unit;
  }
}

export default Pressure;
