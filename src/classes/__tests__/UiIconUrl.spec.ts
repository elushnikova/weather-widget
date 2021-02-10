import UiIconUrl from "@/classes/url/UiIconUrl";

describe("UiIconUrl", () => {
  it("appends icon code to full url", () => {
    const u = new UiIconUrl("settings");
    expect(u.fullUrl()).toContain("settings");
  });

  it("appends host url to full url in production environment", () => {
    process.env.NODE_ENV = "production";
    const host = "https://owm-widget.netlify.app";
    const u = new UiIconUrl("settings");
    expect(u.fullUrl()).toContain(host);
  })
});
