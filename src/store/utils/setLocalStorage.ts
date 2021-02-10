import { MutationPayload } from "vuex";
import STORAGE_KEY from "@/store/utils/storageKey";
import StateInterface from "@/interfaces/StateInterface";

function setLocalStorage(_: MutationPayload, { locationList }: StateInterface) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(locationList));
}

export default setLocalStorage;
