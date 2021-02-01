import ErrorText from "@/types/ErrorText";
import Humidity from "@/classes/Humidity";
import HumidityUnit from "@/types/units/HumidityUnit";

describe("Humidity", () => {
  let h: Humidity;

  beforeEach(() => {
    h = new Humidity(10.12);
  });

  it("is measured in percentages", () => {
    expect(h.unit).toBe(HumidityUnit.Percentage);
  });

  it("does not accept negative values", () => {
    const invalidCall = () => new Humidity(-1);
    expect(invalidCall).toThrow(ErrorText.InvalidHumidity);
  });

  it("does not accept values > 100", () => {
    const invalidCall = () => new Humidity(101);
    expect(invalidCall).toThrow(ErrorText.InvalidHumidity);
  });

  it("can round value to integer", () => {
    h.round(0);
    expect(h.value).toBe(10);
  });

  it("can be converted to string", () => {
    h.round(0);
    expect(h.toString()).toBe("10%");
  });
});
