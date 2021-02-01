import PhysicalQuantityInterface from "@/types/PhysicalQuantityInterface";

abstract class PhysicalQuantity implements PhysicalQuantityInterface {
  unit: any;
  value: number;

  constructor(value: number, unit: any) {
    this.unit = unit;
    this.value = value;
  }

  toString() {
    return this.value + this.unit;
  }
}

export default PhysicalQuantity;
