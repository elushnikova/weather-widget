import IconUrl from "@/classes/url/IconUrl";

class UiIconUrl extends IconUrl {
  constructor(iconCode: string) {
    super({
      baseUrl: "https://openweathermap.org/img/wn/",
      iconCode,
      appendix: "@2x",
      extension: ".png",
    });
  }
}

export default UiIconUrl;
