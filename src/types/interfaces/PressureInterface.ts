import PhysicalQuantityInterface from "@/types/interfaces/PhysicalQuantityInterface";
import PressureUnit from "@/types/units/PressureUnit";

interface PressureInterface extends PhysicalQuantityInterface {
  unit: PressureUnit;
}

export default PressureInterface;
