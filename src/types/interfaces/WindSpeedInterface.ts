import PhysicalQuantityInterface from "@/types/interfaces/PhysicalQuantityInterface";
import SpeedUnit from "@/assets/units/SpeedUnit";

interface WindSpeedInterface extends PhysicalQuantityInterface {
  unit: SpeedUnit;
  toBeaufort(): string;
}

export default WindSpeedInterface;
