import PhysicalQuantityInterface from "@/types/interfaces/PhysicalQuantityInterface";
import TemperatureUnit from "@/types/units/TemperatureUnit";

interface TemperatureInterface extends PhysicalQuantityInterface {
  unit: TemperatureUnit;
}

export default TemperatureInterface;
