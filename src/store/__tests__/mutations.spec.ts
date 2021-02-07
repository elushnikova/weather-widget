import mutations from "@/store/mutations";
import Weather from "@/classes/Weather";
import weatherItem from "@/classes/mocks/weatherItem";
import StateInterface from "@/types/interfaces/StateInterface";
import ErrorText from "@/assets/ErrorText";
import City from "@/classes/City";

const mockW1 = new Weather(weatherItem);
const mockW2 = new Weather({ ...weatherItem, id: 2 });
const mockW3 = new Weather({ ...weatherItem, id: 3 });
const mockW4 = new Weather({ ...weatherItem, id: 4 });
const mockC1 = new City(mockW1);
const mockC2 = new City(mockW2);
const mockC3 = new City(mockW3);
const mockC4 = new City(mockW4);

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
    mutations.remove(state, mockC2);
    expect(state.list).toStrictEqual(expected);
  });

  it("throws error if item isn't in the list", () => {
    expect(state.list).toStrictEqual([mockW1, mockW2, mockW3]);

    const invalidCall = () => {
      mutations.remove(state, mockC4);
    };

    expect(invalidCall).toThrow(ErrorText.ItemNotFound);
  });
});

describe("mutations.reorder", () => {
  beforeEach(() => {
    setupState();
    mutations.remove(state, mockC2);
    mutations.add(state, mockW4);
  });

  it("moves weather item to different index in state.list", () => {
    mutations.add(state, mockW2);
    expect(state.list).toStrictEqual([mockW1, mockW3, mockW4, mockW2]);

    const expected = [mockW1, mockW2, mockW3, mockW4];
    mutations.reorder(state, { item: mockW2, targetIndex: 1 });
    expect(state.list).toStrictEqual(expected);
  });

  it("can move the first element to the last position", () => {
    const expected = [mockW3, mockW4, mockW1];
    mutations.reorder(state, { item: mockW1, targetIndex: 2 });
    expect(state.list).toStrictEqual(expected);
  });

  it("can move the last element to the first position", () => {
    const expected = [mockW4, mockW1, mockW3];
    mutations.reorder(state, { item: mockW4, targetIndex: 0 });
    expect(state.list).toStrictEqual(expected);
  });

  it("moves item to the last position if targetIndex is >= the list length", () => {
    expect(state.list.length).toBe(3);

    mutations.reorder(state, { item: mockW1, targetIndex: 3 });
    expect(state.list).toStrictEqual([mockW3, mockW4, mockW1]);

    mutations.reorder(state, { item: mockW4, targetIndex: 99 });
    expect(state.list).toStrictEqual([mockW3, mockW1, mockW4]);
  });

  it("can move item even if targetIndex is negative - starting from the end of array", () => {
    expect(state.list).toStrictEqual([mockW1, mockW3, mockW4]);

    mutations.reorder(state, { item: mockW1, targetIndex: -1 });
    expect(state.list).toStrictEqual([mockW3, mockW1, mockW4]);

    mutations.reorder(state, { item: mockW1, targetIndex: -2 });
    expect(state.list).toStrictEqual([mockW1, mockW3, mockW4]);
  });

  it("moves item to the first position if list length + targetIndex is less than 0", () => {
    expect(state.list.length).toBe(3);

    mutations.reorder(state, { item: mockW4, targetIndex: -4 });
    expect(state.list).toStrictEqual([mockW4, mockW1, mockW3]);

    mutations.reorder(state, { item: mockW1, targetIndex: -99 });
    expect(state.list).toStrictEqual([mockW1, mockW4, mockW3]);
  });

  it("throws error if item isn't in the list", () => {
    expect(state.list).not.toContain(mockW2);

    const invalidCall = () => {
      mutations.reorder(state, { item: mockW2, targetIndex: 0 });
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
