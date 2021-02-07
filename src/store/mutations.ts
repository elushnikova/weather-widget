import Weather from "@/classes/Weather";
import City from "@/classes/City";
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

  add(state: StateInterface, item: Weather): void {
    const index = state.list.findIndex((i) => i.cityId === item.cityId);
    const isDuplicate = index >= 0;

    if (isDuplicate) {
      throw new Error(ErrorText.ItemIsDuplicate);
    }

    state.list.push(item);
  },

  remove(state: StateInterface, item: City): void {
    const index = state.list.findIndex((i) => i.cityId === item.id);
    const notFound = index < 0;

    if (notFound) {
      throw new Error(ErrorText.ItemNotFound);
    }

    state.list.splice(index, 1);
  },

  reorder(state: StateInterface, { item, targetIndex }: InputInterface): void {
    const index = state.list.indexOf(item);
    const notFound = index < 0;

    if (notFound) {
      throw new Error(ErrorText.ItemNotFound);
    }

    state.list.splice(index, 1);
    state.list.splice(targetIndex, 0, item);
  },
};

export default mutations;
