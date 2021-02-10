import SentenceInterface from "@/interfaces/SentenceInterface";

class Sentence implements SentenceInterface {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  toSentenceCase(properNouns: string[]): string {
    let text = this.capitalize(this.text);

    properNouns.forEach((noun) => {
      const nounRegex = new RegExp(noun, "g");
      text = text.replace(nounRegex, this.capitalize(noun));
    });

    return text;
  }

  private capitalize(word: string): string {
    return word.length > 1
      ? word[0].toUpperCase() + word.slice(1).toLowerCase()
      : word[0].toUpperCase();
  }
}

export default Sentence;
