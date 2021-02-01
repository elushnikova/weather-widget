import Pressure from "@/classes/Pressure";
import PressureUnit from "@/types/units/PressureUnit";

describe("Pressure", () => {
  let p: Pressure;

  beforeEach(() => {
    p = new Pressure(980.12);
  });

  it("is measured in hectopascals", () => {
    expect(p.unit).toBe(PressureUnit.HectoPascal);
  });

  it("value can be rounded to integer", () => {
    p.roundToInteger();
    expect(p.value).toBe(980);
  });

  it("can be converted to string", () => {
    p.roundToInteger();
    expect(p.toString()).toBe("980hPa");
  });
});
