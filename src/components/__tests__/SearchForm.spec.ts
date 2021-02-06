import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import SearchForm from "@/components/SearchForm.vue";

describe("SearchForm.vue", () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue>;

  /** @fixme Avoid casting wrapper.vm to any */
  let wrapperVmAsAny: any;

  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = shallowMount(SearchForm, { localVue });
    wrapperVmAsAny = wrapper.vm;
  });

  afterEach(() => {
    jest.useRealTimers();
    wrapper.destroy();
  });

  it("calls handleSubmit method on submit event", async () => {
    const spyHandleSubmit = jest.spyOn(wrapperVmAsAny, "handleSubmit");
    const form = wrapper.find("form");
    await form.trigger("submit");
    expect(spyHandleSubmit).toHaveBeenCalled();

    spyHandleSubmit.mockRestore();
  });

  it("sets 2 second timeout in handleSubmit method", () => {
    wrapperVmAsAny.handleSubmit();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });

  it("calls hideFeedback callback 2 seconds after handleSubmit call", () => {
    const spyHideFeedback = jest.spyOn(wrapperVmAsAny, "hideFeedback");

    wrapperVmAsAny.handleSubmit();
    expect(spyHideFeedback).not.toBeCalled();

    jest.advanceTimersByTime(2000);
    expect(spyHideFeedback).toBeCalled();
    expect(spyHideFeedback).toHaveBeenCalledTimes(1);

    spyHideFeedback.mockRestore();
  });
});
