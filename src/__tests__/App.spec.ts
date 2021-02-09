import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import Vuex from "vuex";
import App from "@/App.vue";
import IndexView from "@/views/IndexView.vue";
import SettingsView from "@/views/SettingsView.vue";
import mockStoreOptions from "@/store/mocks/mockStoreOptions";

describe("App.vue", () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue>;

  localVue.use(Vuex);
  const mockStore = new Vuex.Store(mockStoreOptions);

  beforeAll(() => {
    wrapper = shallowMount(App, {
      localVue,
      store: mockStore,
    });
  });

  afterAll(() => {
    wrapper.destroy();
  });

  it("renders IndexView component", () => {
    const indexView = wrapper.findComponent(IndexView);
    expect(indexView.exists()).toBe(true);
  });

  it("renders SettingsView component", () => {
    const settingsView = wrapper.findComponent(SettingsView);
    expect(settingsView.exists()).toBe(true);
  });
});
