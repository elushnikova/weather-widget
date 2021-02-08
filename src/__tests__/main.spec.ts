describe("main.ts", () => {
  it("can mount WeatherWidget component", () => {
    /** Suppress console error from undefined fetch */
    const spy = jest
      .spyOn(global.console, "error")
      .mockImplementation(() => {});

    document.body.innerHTML = "<div id='weather-widget'></div>";
    require("@/main");

    const widgetElements = document.getElementsByClassName("weather-widget");
    expect(widgetElements.length).toBe(1);
    spy.mockRestore();
  });
});
