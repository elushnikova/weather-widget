import IconMap from "@/assets/IconMap";
import IconSlug from "@/assets/IconSlug";
import IconInterface from "@/types/interfaces/IconInterface";

class Icon implements IconInterface {
  slug: IconSlug;
  title: string;
  url: string;

  constructor(slug: IconSlug) {
    this.slug = slug;

    const icon = IconMap.get(slug);
    this.title = icon!.title;
    this.url = `/icons/icons8-${icon!.fileSlug}-50.png`;
  }
}

export default Icon;
