import Pressure from "@/classes/Pressure";
import PressureUnit from "@/assets/units/PressureUnit";

describe("Pressure", () => {
  let p: Pressure;

  beforeEach(() => {
    p = new Pressure(980.12);
  });

  it("is measured in hectopascals", () => {
    expect(p.unit).toBe(PressureUnit.HectoPascal);
  });

  it("can round value to integer", () => {
    p.round(0);
    expect(p.value).toBe(980);
  });

  it("can be converted to string", () => {
    p.round(0);
    expect(p.toString()).toBe("980hPa");
  });
});
