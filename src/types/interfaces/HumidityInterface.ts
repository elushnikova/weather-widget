import PhysicalQuantityInterface from "@/types/interfaces/PhysicalQuantityInterface";
import HumidityUnit from "@/types/units/HumidityUnit";

interface HumidityInterface extends PhysicalQuantityInterface {
  unit: HumidityUnit;
}

export default HumidityInterface;
