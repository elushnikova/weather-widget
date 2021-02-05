import { createLocalVue, shallowMount } from "@vue/test-utils";
import WeatherCard from "@/components/WeatherCard.vue";
import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";

describe("WeatherCard.vue", () => {
  const weather = new Weather(weatherItem);

  it("renders props.weather when passed", () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(WeatherCard, {
      localVue,
      propsData: { weather },
    });

    expect(wrapper.vm.$props.weather).toEqual(weather);
    wrapper.destroy();
  });
});
