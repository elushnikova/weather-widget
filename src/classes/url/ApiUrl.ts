import Url from "@/classes/url/Url";
import ApiUrlInterface from "@/interfaces/url/ApiUrlInterface";

abstract class ApiUrl extends Url implements ApiUrlInterface {
  query: string;

  constructor(query: string) {
    super("https://api.openweathermap.org/data/2.5/weather");
    this.query = query + "&appId=d685c708cd4f9709928c921bec3bd482";
  }

  fullUrl(): string {
    return this.baseUrl + this.query;
  }
}

export default ApiUrl;
