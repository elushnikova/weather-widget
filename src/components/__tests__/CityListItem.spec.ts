import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import Vuex from "vuex";
import CityListItem from "@/components/CityListItem.vue";
import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";
import City from "@/classes/City";
import mockStoreOptions from "@/store/mocks/mockStoreOptions";

describe("CityListItem.vue", () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue>;

  localVue.use(Vuex);
  const mockStore = new Vuex.Store(mockStoreOptions);

  /** @fixme Avoid casting wrapper.vm to any */
  let wrapperVmAsAny: any;

  beforeEach(() => {
    const mockWeather = new Weather(weatherItem);
    const mockCity = new City(mockWeather);

    wrapper = mount(CityListItem, {
      localVue,
      store: mockStore,
      propsData: {
        item: mockCity,
      },
    });

    wrapperVmAsAny = wrapper.vm;
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("triggers handleRemove function on click", async () => {
    const spyHandleRemove = jest.spyOn(wrapperVmAsAny, "handleRemove");
    const removeBtn = wrapper.find("button.js-remove");
    expect(removeBtn.exists()).toBe(true);

    await removeBtn.trigger("click");
    expect(spyHandleRemove).toHaveBeenCalled();

    spyHandleRemove.mockRestore();
  });
});
