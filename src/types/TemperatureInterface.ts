import TemperatureUnit from "@/types/TemperatureUnit";

interface TemperatureInterface {
  unit: TemperatureUnit;
  value: number;
  toString(): string;
}

export default TemperatureInterface;
