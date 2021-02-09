import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import Vuex from "vuex";
import IndexView from "@/views/IndexView.vue";
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

  it("dispatches fetchWeather action for each location", async () => {
    expect((wrapper.vm as any).locationList.length).toBe(1);
    expect(mockStoreOptions.actions.fetchWeather).toHaveBeenCalledTimes(1);
  });
});
