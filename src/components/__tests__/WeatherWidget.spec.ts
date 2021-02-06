import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import WeatherWidget from "@/WeatherWidget.vue";
import IndexView from "@/views/IndexView.vue";
import SettingsView from "@/views/SettingsView.vue";

describe("WeatherWidget.vue", () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue>;

  beforeAll(() => {
    wrapper = shallowMount(WeatherWidget, { localVue });
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
