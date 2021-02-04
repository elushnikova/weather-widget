import PhysicalQuantityInterface from "@/types/interfaces/PhysicalQuantityInterface";
import TemperatureUnit from "@/assets/units/TemperatureUnit";

interface TemperatureInterface extends PhysicalQuantityInterface {
  unit: TemperatureUnit;
}

export default TemperatureInterface;
