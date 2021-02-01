import PhysicalQuantityInterface from "@/types/interfaces/PhysicalQuantityInterface";
import DistanceUnit from "@/types/units/DistanceUnit";

interface VisibilityInterface extends PhysicalQuantityInterface {
  unit: DistanceUnit;
  convertToKilometres(): void;
}

export default VisibilityInterface;
