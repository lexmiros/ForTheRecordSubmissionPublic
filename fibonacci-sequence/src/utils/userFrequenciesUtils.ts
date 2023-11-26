export const updateUserFrequencies = (userInputFrequencies: Map<bigint, number>, newInputNumber: bigint): Map<bigint, number> => {
  const newUserInputFrequencies = new Map(userInputFrequencies);
  const currentValue = newUserInputFrequencies.get(newInputNumber) || 0;
  newUserInputFrequencies.set(newInputNumber, currentValue + 1);
  return newUserInputFrequencies
};

export const sortUserFrequencies = (userInputFrequencies: Map<bigint, number>) => {
  return Array.from(userInputFrequencies.entries()).sort(
    (a, b) => b[1] - a[1]
  );
}
