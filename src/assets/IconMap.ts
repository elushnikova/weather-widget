import IconSlug from "@/assets/IconSlug";

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
  [IconSlug.Remove, { title: "Remove", fileSlug: "trash" }],
  [IconSlug.Search, { title: "Search", fileSlug: "down-left" }],
]);

export default IconMap;
