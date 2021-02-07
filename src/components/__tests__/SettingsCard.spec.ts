import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import Vuex from "vuex";
import SettingsCard from "@/components/SettingsCard.vue";
import mockStoreOptions from "@/store/mocks/mockStoreOptions";

describe("SettingsCard.vue", () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue>;

  localVue.use(Vuex);
  const mockStore = new Vuex.Store(mockStoreOptions);

  beforeEach(() => {
    wrapper = shallowMount(SettingsCard, {
      localVue,
      store: mockStore,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("has setter for computed property `list`", () => {
    /** @fixme Avoid casting wrapper.vm to any */
    const wrapperVmAsAny: any = wrapper.vm;

    expect(wrapperVmAsAny.list.length).toBe(1);
    wrapperVmAsAny.list = [];
    expect(wrapperVmAsAny.list.length).toBe(0);
  });
});
