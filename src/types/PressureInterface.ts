import PhysicalQuantityInterface from "@/types/PhysicalQuantityInterface";
import PressureUnit from "@/types/units/PressureUnit";

interface PressureInterface extends PhysicalQuantityInterface {
  unit: PressureUnit;
}

export default PressureInterface;
