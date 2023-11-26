import { updateUserFrequencies, sortUserFrequencies } from './userFrequenciesUtils';

describe('updateUserFrequencies', () => {
  it('should update the frequency of an existing number', () => {
    const userInputFrequencies = new Map([
      [1n, 2],
      [2n, 1],
    ]);

    const newInputNumber = 1n;
    const updatedFrequencies = updateUserFrequencies(userInputFrequencies, newInputNumber);

    expect(updatedFrequencies.get(1n)).toBe(3);
    expect(updatedFrequencies.get(2n)).toBe(1);
  });

  it('should add a new number to the frequencies map', () => {
    const userInputFrequencies = new Map([
      [1n, 2],
      [2n, 1],
    ]);

    const newInputNumber = 3n;
    const updatedFrequencies = updateUserFrequencies(userInputFrequencies, newInputNumber);

    expect(updatedFrequencies.get(1n)).toBe(2);
    expect(updatedFrequencies.get(2n)).toBe(1);
    expect(updatedFrequencies.get(3n)).toBe(1);
  });

  it('should handle an empty frequencies map', () => {
    const userInputFrequencies = new Map();
    const newInputNumber = 1n;

    const updatedFrequencies = updateUserFrequencies(userInputFrequencies, newInputNumber);

    expect(updatedFrequencies.get(1n)).toBe(1);
  });
});

describe('sortUserFrequencies', () => {
  it('should sort user frequencies in descending order', () => {
    const userInputFrequencies = new Map([
      [1n, 3],
      [2n, 1],
      [3n, 2],
    ]);

    const sortedFrequencies = sortUserFrequencies(userInputFrequencies);

    expect(sortedFrequencies).toEqual([[1n, 3], [3n, 2], [2n, 1]]);
  });

  it('should handle an empty frequencies map', () => {
    const userInputFrequencies = new Map();

    const sortedFrequencies = sortUserFrequencies(userInputFrequencies);

    expect(sortedFrequencies).toEqual([]);
  });
});
