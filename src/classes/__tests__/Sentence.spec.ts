import Sentence from "@/classes/Sentence";

describe("Sentence", () => {
  let s: Sentence;

  beforeEach(() => {
    s = new Sentence("lorem ipsum dolor sit amet");
  });

  it("can be converted to sentence case", () => {
    const converted = s.toSentenceCase([]);
    expect(converted).toBe("Lorem ipsum dolor sit amet");
  });

  it("can be converted to sentence case with regard to proper nouns", () => {
    const properNouns = ["dolor", "sit"];
    const converted = s.toSentenceCase(properNouns);
    expect(converted).toBe("Lorem ipsum Dolor Sit amet");
  });

  it("can capitalize single letter text", () => {
    const singleChar = new Sentence("c");
    const capitalizedChar = singleChar.toSentenceCase([]);
    expect(capitalizedChar).toBe("C");
  });
});
