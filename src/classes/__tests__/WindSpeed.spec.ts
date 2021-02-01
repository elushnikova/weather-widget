import WindSpeed from "@/classes/WindSpeed";
import ErrorText from "@/types/ErrorText";
import SpeedUnit from "@/types/units/SpeedUnit";

describe("WindSpeed", () => {
  let w: WindSpeed;

  beforeEach(() => {
    w = new WindSpeed(8.123456);
  });

  it("is measured in metres per second", () => {
    expect(w.unit).toBe(SpeedUnit.MetrePerSecond);
  });

  it("does not accept negative values", () => {
    const invalidCall = () => new WindSpeed(-1);
    expect(invalidCall).toThrow(ErrorText.InvalidWindSpeed);
  });

  it("can round value to one decimal place", () => {
    w.round(1);
    expect(w.value).toBe(8.1);
  });

  it("can be converted to string", () => {
    w.round(1);
    expect(w.toString()).toBe("8.1m/s");
  });

  it("can be described according to Beaufort scale", () => {
    expect(w.toBeaufort()).toBe("Fresh breeze");
  });

  it("is described as hurricane, if it's value is infinite", () => {
    const h = new WindSpeed(Infinity);
    expect(h.toBeaufort()).toBe("Hurricane");
  });
});
