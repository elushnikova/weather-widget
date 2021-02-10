import PhysicalQuantityInterface from "@/interfaces/quantities/PhysicalQuantityInterface";
import DistanceUnit from "@/assets/units/DistanceUnit";

interface VisibilityInterface extends PhysicalQuantityInterface {
  unit: DistanceUnit;
  convertToKilometres(): void;
}

export default VisibilityInterface;
