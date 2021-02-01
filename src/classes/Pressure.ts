import PhysicalQuantity from "@/classes/PhysicalQuantity";
import PressureInterface from "@/types/PressureInterface";
import PressureUnit from "@/types/PressureUnit";

class Pressure extends PhysicalQuantity implements PressureInterface {
  constructor(value: number) {
    const roundedValue = Number(value.toFixed(0));
    super(roundedValue, PressureUnit.HectoPascal);
  }
}

export default Pressure;
