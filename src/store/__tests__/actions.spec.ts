import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import actions from "@/store/actions";
import ApiInputInterface from "@/types/interfaces/ApiInputInterface";
import mockStoreOptions from "@/store/mocks/mockStoreOptions";

const localVue = createLocalVue();
localVue.use(Vuex);
const mockStore = new Vuex.Store({ ...mockStoreOptions, actions });

const input: ApiInputInterface = {
  apiKey: "TEST KEY",
  location: "TEST LOCATION",
};

describe("actions.fetchWeather", () => {
  it("returns Promise object", () => {
    const result = mockStore.dispatch("fetchWeather", input);
    const isPromise = Promise.resolve(result) === result;
    expect(isPromise).toBe(true);
  });
});
