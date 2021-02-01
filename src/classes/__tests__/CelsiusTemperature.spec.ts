import CelsiusTemperature from "@/classes/CelsiusTemperature";
import TemperatureUnit from "@/types/units/TemperatureUnit";

describe("CelsiusTemperature", () => {
  let t: CelsiusTemperature;

  beforeEach(() => {
    t = new CelsiusTemperature(300);
  });

  it("is measured in degrees Celsius", () => {
    expect(t.unit).toBe(TemperatureUnit.DegreeCelsius);
  });

  it("can round value to 2 decimal places", () => {
    t.round(2);
    expect(t.value).toBe(26.85);
  });

  it("has value converted from kelvins to degrees Celsius", () => {
    t.round(2);
    expect(t.value).toBe(26.85);
  });

  it("can be converted to string", () => {
    t.round(2);
    expect(t.toString()).toBe("26.85°C");
  });

  it("can round value to integer", () => {
    t.round(0);
    expect(t.value).toBe(27);
  });
});
