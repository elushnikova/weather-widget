import parse from "@/store/utils/parse";

describe("parse function", () => {
  it("calls response.json() if response status is 200 OK", () => {
    const mockJson = jest.fn();
    const mockResponse: Pick<Response, "status" | "json"> = {
      status: 200,
      json: mockJson,
    };

    parse(mockResponse);
    expect(mockJson).toHaveBeenCalledTimes(1);
  });
});
