import { createLocalVue, shallowMount } from "@vue/test-utils";
import CityCard from "@/components/CityCard.vue";
import city from "./__mocks__/city";

describe("CityCard.vue", () => {
  it("renders props.item when passed", () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(CityCard, {
      localVue,
      propsData: { item: city },
    });

    expect(wrapper.vm.$props.item).toEqual(city);
    wrapper.destroy();
  });
});
