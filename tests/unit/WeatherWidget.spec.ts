import { createLocalVue, shallowMount } from "@vue/test-utils";
import WeatherWidget from "@/WeatherWidget.vue";
import CityCard from "@/components/CityCard.vue";

describe("WeatherWidget.vue", () => {
  it("renders CityCard component", () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(WeatherWidget, { localVue });
    const cityCard = wrapper.findComponent(CityCard);
    
    expect(cityCard.exists()).toBe(true);
    wrapper.destroy();
  });
});
