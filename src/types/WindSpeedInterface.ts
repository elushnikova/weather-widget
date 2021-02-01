import PhysicalQuantityInterface from "@/types/PhysicalQuantityInterface";
import SpeedUnit from "@/types/SpeedUnit";

interface WindSpeedInterface extends PhysicalQuantityInterface {
  unit: SpeedUnit;
  toBeaufort(): string;
}

export default WindSpeedInterface;
