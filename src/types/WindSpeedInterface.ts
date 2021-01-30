import SpeedUnit from "@/types/SpeedUnit";

interface WindSpeedInterface {
  unit: SpeedUnit;
  value: number;
  toString(): string;
  toBeaufort(): string;
}

export default WindSpeedInterface;
