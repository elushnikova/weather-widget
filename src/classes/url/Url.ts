import UrlInterface from "@/interfaces/url/UrlInterface";

abstract class Url implements UrlInterface {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  abstract fullUrl(): string;
}

export default Url;
