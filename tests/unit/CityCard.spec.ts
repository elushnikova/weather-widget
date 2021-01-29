import { createLocalVue, shallowMount } from "@vue/test-utils";
import CityCard from "@/components/CityCard.vue";

describe("CityCard.vue", () => {
  it("renders props.city when passed", () => {
    const city = "Moscow";
    const localVue = createLocalVue();
    const wrapper = shallowMount(CityCard, {
      localVue,
      propsData: { city }
    });
    
    expect(wrapper.text()).toMatch(city);
    wrapper.destroy();
  });
});
