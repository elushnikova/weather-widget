describe("main.ts", () => {
  it("can mount WeatherWidget component", () => {
    document.body.innerHTML = "<div id='weather-widget'></div>";
    require("@/main");

    const widgetElements = document.getElementsByClassName("weather-widget");
    expect(widgetElements.length).toBe(1);
  });
});
