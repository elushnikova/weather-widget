import Url from "@/classes/url/Url";
import ApiUrlInterface from "@/interfaces/url/ApiUrlInterface";

const API_KEY = "d685c708cd4f9709928c921bec3bd482";

abstract class ApiUrl extends Url implements ApiUrlInterface {
  query: string;

  constructor(query: string) {
    super("https://api.openweathermap.org/data/2.5/weather");
    this.query = query + `&appId=${API_KEY}`;
  }

  fullUrl(): string {
    return this.baseUrl + this.query;
  }
}

export default ApiUrl;
