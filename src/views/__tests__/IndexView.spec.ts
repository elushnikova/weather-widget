import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import Vuex from "vuex";
import IndexView from "@/views/IndexView.vue";
import WeatherEmptyCard from "@/components/WeatherEmptyCard.vue";
import mockStoreOptions from "@/store/mocks/mockStoreOptions";

describe("IndexView.vue", () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue>;

  localVue.use(Vuex);
  const mockStore = new Vuex.Store(mockStoreOptions);

  beforeAll(() => {
    wrapper = shallowMount(IndexView, {
      localVue,
      store: mockStore,
      propsData: { show: true },
    });
  });

  afterAll(() => {
    wrapper.destroy();
  });

  it("renders WeatherEmptyCard, if state.weatherList is empty", async () => {
    const emptyCard = wrapper.findComponent(WeatherEmptyCard);
    expect(mockStore.state.weatherList.length).toBe(0);
    expect(emptyCard.exists()).toBe(true);
  });
});
