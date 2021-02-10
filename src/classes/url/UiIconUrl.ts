import IconUrl from "@/classes/url/IconUrl";

class UiIconUrl extends IconUrl {
  constructor(iconCode: string) {
    super({
      baseUrl:
        (process.env.NODE_ENV === "production"
          ? "https://owm-widget.netlify.app"
          : "") + "/icons/icons8-",
      iconCode,
      appendix: "-50",
      extension: ".png",
    });
  }
}

export default UiIconUrl;
