import Temperature from "@/classes/Temperature";
import TemperatureUnit from "@/types/TemperatureUnit";

describe("Temperature", () => {
  let t: Temperature;

  beforeAll(() => {
    t = new Temperature(10.123456);
  });

  it("is measured in kelvins", () => {
    expect(t.unit).toBe(TemperatureUnit.Kelvin);
  });

  it("has value rounded to two decimal places", () => {
    expect(t.value).toBe(10.12);
  });

  it("can be converted to string", () => {
    expect(t.toString()).toBe("10.12K");
  });
});
