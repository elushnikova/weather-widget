import ErrorText from "@/assets/ErrorText";
import isOk from "@/store/utils/isOk";

describe("isOk function", () => {
  it("returns true if status is 200 OK", () => {
    const response: Pick<Response, "status"> = { status: 200 };
    expect(isOk(response.status)).toBe(true);
  });

  it("throws InvalidApiKey error if status is 401 Unauthorized", () => {
    const invalidCall = () => {
      isOk(401);
    };
    expect(invalidCall).toThrow(ErrorText.InvalidApiKey);
  });

  it("throws CityNotFound error if status is 404 Not Found", () => {
    const invalidCall = () => {
      isOk(404);
    };
    expect(invalidCall).toThrow(ErrorText.CityNotFound);
  });

  it("throws generic ClientError if status code starts with 4", () => {
    const invalidCall = () => {
      isOk(400);
    };
    expect(invalidCall).toThrow(ErrorText.ClientError);
  });

  it("throws generic ServerError if status code starts with 5", () => {
    const invalidCall = () => {
      isOk(500);
    };
    expect(invalidCall).toThrow(ErrorText.ServerError);
  });

  it("throws generic error if status code does not correspond to any of the above", () => {
    const invalidCall = () => {
      isOk(201);
    };
    expect(invalidCall).toThrow(ErrorText.OtherResponse);
  });
});
