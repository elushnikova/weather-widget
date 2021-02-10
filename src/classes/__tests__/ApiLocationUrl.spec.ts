import ApiLocationUrl from "@/classes/url/ApiLocationUrl";

describe("ApiLocationUrl", () => {
  it("appends location query to full url", () => {
    const u = new ApiLocationUrl("Saint Petersburg, RU");
    expect(u.fullUrl()).toContain("?q=Saint Petersburg, RU");
  });
});
