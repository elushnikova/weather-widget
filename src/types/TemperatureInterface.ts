import PhysicalQuantityInterface from "@/types/PhysicalQuantityInterface";
import TemperatureUnit from "@/types/TemperatureUnit";

interface TemperatureInterface extends PhysicalQuantityInterface {
  unit: TemperatureUnit;
}

export default TemperatureInterface;
