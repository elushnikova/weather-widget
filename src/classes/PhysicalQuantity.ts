import PhysicalQuantityInterface from "@/types/interfaces/quantities/PhysicalQuantityInterface";

abstract class PhysicalQuantity implements PhysicalQuantityInterface {
  unit: any;
  value: number;

  constructor(value: number, unit: any) {
    this.unit = unit;
    this.value = value;
  }

  toString(): string {
    return this.value + this.unit;
  }

  toFixedString(decimalPlaces: number): string {
    return this.value.toFixed(decimalPlaces) + this.unit;
  }

  round(decimalPlaces: number): void {
    const fixedValue = this.value.toFixed(decimalPlaces);
    this.value = Number(fixedValue);
  }
}

export default PhysicalQuantity;
