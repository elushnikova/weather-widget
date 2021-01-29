import { shallowMount } from "@vue/test-utils";
import CityCard from "@/components/CityCard.vue";

describe("CityCard.vue", () => {
  it("renders props.city when passed", () => {
    const city = "Moscow";
    const wrapper = shallowMount(CityCard, {
      propsData: { city }
    });
    expect(wrapper.text()).toMatch(city);
  });
});
