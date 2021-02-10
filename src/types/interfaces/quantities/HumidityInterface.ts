import PhysicalQuantityInterface from "@/types/interfaces/quantities/PhysicalQuantityInterface";
import HumidityUnit from "@/assets/units/HumidityUnit";

interface HumidityInterface extends PhysicalQuantityInterface {
  unit: HumidityUnit;
}

export default HumidityInterface;
