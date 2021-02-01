import Pressure from "@/classes/Pressure";
import PressureUnit from "@/types/units/PressureUnit";

describe("Pressure", () => {
  let p: Pressure;

  beforeAll(() => {
    p = new Pressure(980.12);
  });

  it("is measured in hectopascals", () => {
    expect(p.unit).toBe(PressureUnit.HectoPascal);
  });

  it("has value rounded to zero decimal places", () => {
    expect(p.value).toBe(980);
  });

  it("can be converted to string", () => {
    expect(p.toString()).toBe("980hPa");
  });
});
