import DistanceUnit from "@/types/units/DistanceUnit";
import PhysicalQuantity from "@/classes/PhysicalQuantity";
import VisibilityInterface from "@/types/interfaces/VisibilityInterface";

class Visibility extends PhysicalQuantity implements VisibilityInterface {
  constructor(value: number) {
    super(value, DistanceUnit.Metre);
  }

  convertToKilometres(): void {
    this.value = this.value / 1000;
    this.unit = DistanceUnit.Kilometre;
  }
}

export default Visibility;
