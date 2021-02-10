import IconMap from "@/assets/IconMap";
import IconSlug from "@/assets/IconSlug";
import IconInterface from "@/interfaces/IconInterface";

class Icon implements IconInterface {
  slug: IconSlug;
  title: string;
  url: string;

  constructor(slug: IconSlug) {
    const icon = IconMap.get(slug);
    const host =
      process.env.NODE_ENV === "production"
        ? "https://owm-widget.netlify.app/"
        : "";

    this.slug = slug;
    this.title = icon!.title;
    this.url = `${host}/icons/icons8-${icon!.fileSlug}-50.png`;
  }
}

export default Icon;
