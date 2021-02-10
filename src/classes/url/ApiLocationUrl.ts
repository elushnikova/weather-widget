import ApiUrl from "@/classes/url/ApiUrl";

class ApiLocationUrl extends ApiUrl {
  constructor(location: string) {
    super("?q=" + location);
  }
}

export default ApiLocationUrl;
