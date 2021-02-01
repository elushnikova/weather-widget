import PhysicalQuantityInterface from "@/types/interfaces/PhysicalQuantityInterface";

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

  roundToInteger(): void {
    this.value = Number(this.value.toFixed(0));
  }
}

export default PhysicalQuantity;
