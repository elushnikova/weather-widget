import ApiCoordsUrl from "@/classes/url/ApiCoordsUrl";

describe("ApiCoordsUrl", () => {
  it("appends coordinates query to full url", () => {
    const u = new ApiCoordsUrl({ lat: 59.9311, lon: 30.3609 });
    expect(u.fullUrl()).toContain("?lat=59.9311");
    expect(u.fullUrl()).toContain("&lon=30.3609");
  });
});
