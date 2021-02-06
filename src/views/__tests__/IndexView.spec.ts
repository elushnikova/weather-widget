import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import IndexView from "@/views/IndexView.vue";
import WeatherCard from "@/components/WeatherCard.vue";

describe("IndexView.vue", () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue>;

  beforeAll(() => {
    wrapper = shallowMount(IndexView, {
      localVue,
      propsData: { show: true },
    });
  });

  afterAll(() => {
    wrapper.destroy();
  });

  it("renders at least one WeatherCard", () => {
    const weatherCard = wrapper.findComponent(WeatherCard);
    expect(weatherCard.exists()).toBe(true);
  });
});
