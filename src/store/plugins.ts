import { Store } from "vuex";
import setLocalStorage from "@/store/utils/setLocalStorage";
import StateInterface from "@/interfaces/StateInterface";

const localStoragePlugin = (store: Store<StateInterface>) => {
  store.subscribe(setLocalStorage);
};

const plugins = [localStoragePlugin];

export default plugins;
