import weatherItem from "@/classes/mocks/weatherItem";
import Weather from "@/classes/Weather";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import StateInterface from "@/interfaces/StateInterface";

const mockWeather = new Weather(weatherItem);
const mockState: StateInterface = {
  apiKey: "",
  weatherList: [mockWeather],
  locationList: [mockWeather.location],
};
const mockActions: typeof actions = {
  remove: jest.fn(),
  setList: jest.fn(),
  searchLocation: jest.fn().mockResolvedValue(mockWeather.location),
  fetchWeather: jest.fn().mockResolvedValue(mockWeather),
};

const mockStoreOptions = {
  state: mockState,
  actions: mockActions,
  getters,
  mutations,
};

export default mockStoreOptions;
