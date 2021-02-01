import Temperature from "@/classes/Temperature";
import TemperatureUnit from "@/types/units/TemperatureUnit";

describe("Temperature", () => {
  let t: Temperature;

  beforeAll(() => {
    t = new Temperature(10.123456, TemperatureUnit.Kelvin);
  });

  it("has value rounded to two decimal places", () => {
    expect(t.value).toBe(10.12);
  });
});
