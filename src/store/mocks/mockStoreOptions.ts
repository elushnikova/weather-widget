import weatherItem from "@/classes/mocks/weatherItem";
import Weather from "@/classes/Weather";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import StateInterface from "@/types/interfaces/StateInterface";

const mockWeather = new Weather(weatherItem);
const mockState: StateInterface = {
  apiKey: "",
  weatherList: [mockWeather],
  locationList: [mockWeather.location],
};
const mockActions = {
  searchLocation(): void {
    return;
  },
};

const mockStoreOptions = {
  state: mockState,
  actions: mockActions,
  getters,
  mutations,
};

export default mockStoreOptions;
