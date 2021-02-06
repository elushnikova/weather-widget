import { createLocalVue, shallowMount } from "@vue/test-utils";
import CityListItem from "@/components/CityListItem.vue";
import IconSlug from "@/assets/IconSlug";

describe("CityListItem.vue", () => {
  it("provides access to IconSlug via data function", () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(CityListItem, { localVue });

    /** @fixme Avoid casting wrapper.vm to any */
    expect((wrapper.vm as any).IconSlug).toBe(IconSlug);

    wrapper.destroy();
  });
});
