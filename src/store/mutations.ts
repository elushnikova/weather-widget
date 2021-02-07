import Vue from "vue";
import Weather from "@/classes/Weather";
import StateInterface from "@/types/interfaces/StateInterface";
import ErrorText from "@/assets/ErrorText";

interface InputInterface {
  item: Weather;
  targetIndex: number;
}

const mutations = {
  setKey(state: StateInterface, apiKey: string): void {
    state.apiKey = apiKey;
  },

  setList(state: StateInterface, list: Weather[]): void {
    Vue.set(state, "list", [...list]);
  },

  add(state: StateInterface, item: Weather): void {
    const index = state.list.findIndex((i) => i.cityId === item.cityId);
    const isDuplicate = index >= 0;

    if (isDuplicate) {
      throw new Error(ErrorText.ItemIsDuplicate);
    }

    state.list.push(item);
  },

  remove(state: StateInterface, item: Weather): void {
    const index = state.list.findIndex((i) => i.cityId === item.cityId);
    const notFound = index < 0;

    if (notFound) {
      throw new Error(ErrorText.ItemNotFound);
    }

    state.list.splice(index, 1);
  },
};

export default mutations;
