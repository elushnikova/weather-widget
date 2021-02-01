import PhysicalQuantityInterface from "@/types/PhysicalQuantityInterface";
import TemperatureUnit from "@/types/units/TemperatureUnit";

interface TemperatureInterface extends PhysicalQuantityInterface {
  unit: TemperatureUnit;
}

export default TemperatureInterface;
