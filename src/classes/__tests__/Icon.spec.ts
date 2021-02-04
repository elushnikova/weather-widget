import Icon from "@/classes/Icon";
import IconMap from "@/assets/IconMap";
import IconSlug from "@/assets/IconSlug";

describe("Icon", () => {
  let i: Icon;

  beforeEach(() => {
    i = new Icon(IconSlug.Wind);
  });

  it("gets file slug from IconMap", () => {
    const mapItem = IconMap.get(IconSlug.Wind);
    expect(i.url).toContain(mapItem!.fileSlug);
  });

  it("composes file url correctly", () => {
    expect(i.url).toBe("/icons/icons8-up-arrow-50.png");
  });
});
