import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import AppIcon from "@/components/AppIcon.vue";
import IconSlug from "@/assets/IconSlug";
import ErrorText from "@/assets/ErrorText";

describe("AppIcon.vue", () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<AppIcon>;

  beforeEach(() => {
    wrapper = shallowMount(AppIcon, {
      localVue,
      propsData: { slug: IconSlug.Wind },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("has .ww-icon class", () => {
    expect(wrapper.element.classList).toContain("ww-icon");
  });

  it("checks whether passed slug prop is actual IconSlug", () => {
    /** @fixme Avoid casting to any */
    expect((wrapper as any).vm.isValid).toBe(true);
  });

  it("throws error, if icon slug is invalid", () => {
    /**
     * Suppress console error from created hook.
     * {@link https://github.com/vuejs/vue-test-utils/issues/641#issuecomment-443651405}
     */
    const spy = jest
      .spyOn(global.console, "error")
      .mockImplementation(() => {});
    const options = {
      localVue,
      propsData: { slug: "invalid-slug" },
    };

    try {
      shallowMount(AppIcon, options);
    } catch (error) {
      expect(error.message).toBe(ErrorText.InvalidIconSlug);
    } finally {
      spy.mockRestore();
    }
  });
});
