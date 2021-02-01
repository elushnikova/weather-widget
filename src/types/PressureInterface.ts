import PhysicalQuantityInterface from "@/types/PhysicalQuantityInterface";
import PressureUnit from "@/types/PressureUnit";

interface PressureInterface extends PhysicalQuantityInterface {
  unit: PressureUnit;
}

export default PressureInterface;
