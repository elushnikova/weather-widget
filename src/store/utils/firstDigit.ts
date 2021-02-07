function firstDigit(code: number): number {
  const codeStr = String(code);
  return Number(codeStr[0]);
}

export default firstDigit;
