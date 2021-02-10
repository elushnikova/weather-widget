import PhysicalQuantityInterface from "@/interfaces/quantities/PhysicalQuantityInterface";
import PressureUnit from "@/assets/units/PressureUnit";

interface PressureInterface extends PhysicalQuantityInterface {
  unit: PressureUnit;
}

export default PressureInterface;
