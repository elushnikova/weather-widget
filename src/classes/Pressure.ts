import PhysicalQuantity from "@/classes/PhysicalQuantity";
import PressureInterface from "@/types/interfaces/PressureInterface";
import PressureUnit from "@/types/units/PressureUnit";

class Pressure extends PhysicalQuantity implements PressureInterface {
  constructor(value: number) {
    const roundedValue = Number(value.toFixed(0));
    super(roundedValue, PressureUnit.HectoPascal);
  }
}

export default Pressure;
