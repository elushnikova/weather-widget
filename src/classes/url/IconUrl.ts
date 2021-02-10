import Url from "@/classes/url/Url";
import IconUrlInterface from "@/interfaces/url/IconUrlInterface";
import IconUrlType from "@/types/IconUrlType";

abstract class IconUrl extends Url implements IconUrlInterface {
  iconCode: string;
  appendix: string;
  extension: string;

  constructor({ baseUrl, iconCode, appendix, extension }: IconUrlType) {
    super(baseUrl);
    this.iconCode = iconCode;
    this.appendix = appendix;
    this.extension = extension;
  }

  fullUrl(): string {
    return this.baseUrl + this.iconCode + this.appendix + this.extension;
  }
}

export default IconUrl;
