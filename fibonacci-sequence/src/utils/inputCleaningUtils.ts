export const allowOnlyNumeric = (inputString: string): string => {
  return inputString.replace(/\D/g, "");
}

export const allowNumericAndHyphen = (inputString: string): string => {
  return inputString.replace(/[^-0-9]+/g, "")
}

export const formatNumberToScientificNotation = (number: bigint): string => {
  const numberString = number.toString();
  if (numberString.length > 10) {
    // Convert to scientific notation
    return Number.parseFloat(numberString).toExponential(8);
  }
  return numberString;
};

export const formatInputToMaxChars = (input: string, maxLength: number): string => {
  return input.slice(0, maxLength);
}
