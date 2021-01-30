import CelsiusTemperature from "@/classes/CelsiusTemperature";
import TemperatureUnit from "@/types/TemperatureUnit";

describe("CelsiusTemperature", () => {
  let t: CelsiusTemperature;

  beforeAll(() => {
    t = new CelsiusTemperature(300);
  });

  it("is measured in degrees Celsius", () => {
    expect(t.unit).toBe(TemperatureUnit.DegreeCelsius);
  });

  it("has value converted from kelvins to degrees Celsius", () => {
    expect(t.value).toBe(26.85);
  });

  it("can be converted to string", () => {
    expect(t.toString()).toBe("26.85°C");
  });
});
