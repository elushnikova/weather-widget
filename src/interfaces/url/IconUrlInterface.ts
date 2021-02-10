import UrlInterface from "@/interfaces/url/UrlInterface";

interface IconUrlInterface extends UrlInterface {
  iconCode: string;
  appendix: string;
  extension: string;
}

export default IconUrlInterface;
