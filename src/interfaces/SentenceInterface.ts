interface SentenceInterface {
  text: string;
  toSentenceCase(properNouns: string[]): string;
}

export default SentenceInterface;
