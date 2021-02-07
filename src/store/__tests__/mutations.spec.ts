import mutations from "@/store/mutations";
import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";
import StateInterface from "@/types/interfaces/StateInterface";
import ErrorText from "@/assets/ErrorText";

const mockW1 = new Weather(weatherItem);
const mockW2 = new Weather({ ...weatherItem, id: 2 });
const mockW3 = new Weather({ ...weatherItem, id: 3 });
const mockW4 = new Weather({ ...weatherItem, id: 4 });

let state: StateInterface;

describe("mutations.add", () => {
  beforeEach(() => {
    setupState();
  });

  it("adds weather item to state.list", () => {
    const expected = [mockW1, mockW2, mockW3, mockW4];
    mutations.add(state, mockW4);
    expect(state.list).toStrictEqual(expected);
  });

  it("throws error if item is already in the list", () => {
    expect(state.list).toStrictEqual([mockW1, mockW2, mockW3]);

    const invalidCall = () => {
      mutations.add(state, mockW1);
    };

    expect(invalidCall).toThrow(ErrorText.ItemIsDuplicate);
  });
});

describe("mutations.remove", () => {
  beforeEach(() => {
    setupState();
  });

  it("removes weather item from state.list", () => {
    const expected = [mockW1, mockW3];
    mutations.remove(state, mockW2);
    expect(state.list).toStrictEqual(expected);
  });

  it("throws error if item isn't in the list", () => {
    expect(state.list).toStrictEqual([mockW1, mockW2, mockW3]);

    const invalidCall = () => {
      mutations.remove(state, mockW4);
    };

    expect(invalidCall).toThrow(ErrorText.ItemNotFound);
  });
});

function setupState() {
  state = {
    apiKey: "",
    list: [mockW1, mockW2, mockW3],
  };
}
