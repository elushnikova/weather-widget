import { createLocalVue, shallowMount } from "@vue/test-utils";
import WeatherWidget from "@/WeatherWidget.vue";
import WeatherCard from "@/components/WeatherCard.vue";

describe("WeatherWidget.vue", () => {
  it("renders WeatherCard component", () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(WeatherWidget, { localVue });
    const cityCard = wrapper.findComponent(WeatherCard);
    
    expect(cityCard.exists()).toBe(true);
    wrapper.destroy();
  });
});
