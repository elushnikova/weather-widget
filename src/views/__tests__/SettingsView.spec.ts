import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import SettingsView from "@/views/SettingsView.vue";
import SettingsCard from "@/components/SettingsCard.vue";
import SearchCard from "@/components/SearchCard.vue";

describe("SettingsView.vue", () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue>;

  beforeAll(() => {
    wrapper = shallowMount(SettingsView, {
      localVue,
      propsData: { show: true },
    });
  });

  afterAll(() => {
    wrapper.destroy();
  });

  it("renders SettingsCard component", () => {
    const settingsCard = wrapper.findComponent(SettingsCard);
    expect(settingsCard.exists()).toBe(true);
  });

  it("renders SearchCard component", () => {
    const searchCard = wrapper.findComponent(SearchCard);
    expect(searchCard.exists()).toBe(true);
  });
});
