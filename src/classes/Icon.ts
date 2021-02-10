import IconMap from "@/assets/IconMap";
import IconSlug from "@/assets/IconSlug";
import IconInterface from "@/interfaces/IconInterface";
import UiIconUrl from "@/classes/url/UiIconUrl";

class Icon implements IconInterface {
  slug: IconSlug;
  title: string;
  url: string;

  constructor(slug: IconSlug) {
    const icon = IconMap.get(slug);
    const u = new UiIconUrl(icon!.fileSlug);

    this.slug = slug;
    this.title = icon!.title;
    this.url = u.fullUrl();
  }
}

export default Icon;
