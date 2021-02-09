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

  it("has setter for computed property locationList", async () => {
    /** @fixme Avoid casting wrapper.vm to any */
    const wrapperVmAsAny: any = wrapper.vm;
    const spy = jest.spyOn(wrapperVmAsAny.$store, "dispatch");

    expect(wrapperVmAsAny.locationList.length).toBe(1);
    wrapperVmAsAny.locationList = [];

    expect(spy).toHaveBeenCalledWith("setList", []);
    spy.mockRestore();
  });
});
