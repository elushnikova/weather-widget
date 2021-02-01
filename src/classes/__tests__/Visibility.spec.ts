import DistanceUnit from "@/types/units/DistanceUnit";
import Visibility from "@/classes/Visibility";

describe("Visibility", () => {
  let v: Visibility;

  beforeEach(() => {
    v = new Visibility(10000);
  });

  it("is measured in metres", () => {
    expect(v.unit).toBe(DistanceUnit.Metre);
  });

  it("can be converted to kilometres", () => {
    v.convertToKilometres();
    expect(v.value).toBe(10);
  });

  it("can be converted to string", () => {
    v.convertToKilometres();
    expect(v.toString()).toBe("10km");
  });
});
