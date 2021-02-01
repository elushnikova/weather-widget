interface PhysicalQuantityInterface {
  unit: any;
  value: number;
  toString(): string;
  roundToInteger(): void;
}

export default PhysicalQuantityInterface;
