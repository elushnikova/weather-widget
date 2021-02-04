import IconSlug from "@/types/IconSlug";

type IconMapItem = {
  title: string;
  fileSlug: string;
};

const IconMap: Readonly<Map<IconSlug, IconMapItem>> = new Map([
  [IconSlug.Settings, { title: "Settings", fileSlug: "settings" }],
  [IconSlug.Close, { title: "Close", fileSlug: "multiply" }],
  [IconSlug.Wind, { title: "Wind direction", fileSlug: "up-arrow" }],
  [IconSlug.Pressure, { title: "Pressure", fileSlug: "pressure-gauge" }],
  [IconSlug.Drag, { title: "Drag", fileSlug: "menu" }],
  [IconSlug.Delete, { title: "Delete", fileSlug: "trash" }],
  [IconSlug.Search, { title: "Search", fileSlug: "down-left" }],
]);

export default IconMap;
