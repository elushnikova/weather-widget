import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import actions from "@/store/actions";
import mockStoreOptions from "@/store/mocks/mockStoreOptions";

const localVue = createLocalVue();
localVue.use(Vuex);
const mockStore = new Vuex.Store({ ...mockStoreOptions, actions });

describe("actions.searchWeather", () => {
  it("returns Promise object", () => {
    const result = mockStore.dispatch("searchWeather", "TEST LOCATION");
    const isPromise = Promise.resolve(result) === result;
    expect(isPromise).toBe(true);
  });
});
