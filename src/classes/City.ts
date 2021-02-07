import CityInterface from "@/types/interfaces/CityInterface";
import Weather from "./Weather";

/** @deprecated */
class City implements CityInterface {
  id: number;
  name: string;
  country: string;

  constructor(item: Weather) {
    this.id = item.cityId;
    [this.name, this.country] = item.location.split(", ");
  }

  toString(): string {
    return this.name + ", " + this.country;
  }
}

export default City;
