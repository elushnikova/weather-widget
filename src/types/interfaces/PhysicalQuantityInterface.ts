interface PhysicalQuantityInterface {
  unit: any;
  value: number;
  toString(): string;
  round(decimalPlaces: number): void;
}

export default PhysicalQuantityInterface;
