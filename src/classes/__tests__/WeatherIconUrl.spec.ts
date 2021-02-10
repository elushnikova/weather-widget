import WeatherIconUrl from "@/classes/url/WeatherIconUrl";

describe("WeatherIconUrl", () => {
  it("appends icon code to full url", () => {
    const u = new WeatherIconUrl("13n");
    expect(u.fullUrl()).toContain("13n");
  });
});
