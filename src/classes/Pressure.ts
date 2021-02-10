import PhysicalQuantity from "@/classes/PhysicalQuantity";
import PressureInterface from "@/interfaces/quantities/PressureInterface";
import PressureUnit from "@/assets/units/PressureUnit";

class Pressure extends PhysicalQuantity implements PressureInterface {
  constructor(value: number) {
    super(value, PressureUnit.HectoPascal);
  }
}

export default Pressure;
