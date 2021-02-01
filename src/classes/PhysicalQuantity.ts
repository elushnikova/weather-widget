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

  round(decimalPlaces: number) {
    const fixedValue = this.value.toFixed(decimalPlaces);
    this.value = Number(fixedValue);
  }
}

export default PhysicalQuantity;
