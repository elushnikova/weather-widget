import ApiUrl from "@/classes/url/ApiUrl";
import ApiCoordsType from "@/types/ApiCoordsType";

class ApiCoordsUrl extends ApiUrl {
  constructor({ lat, lon }: ApiCoordsType) {
    super(`?lat=${lat}` + `&lon=${lon}`);
  }
}

export default ApiCoordsUrl;
