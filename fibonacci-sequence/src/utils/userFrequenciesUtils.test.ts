import { updateUserFrequencies, sortUserFrequencies } from './userFrequenciesUtils';

const thousandthDigitOfFibonacciSequence = 43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n

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

  it('should add a new large number to the frequencies map', () => {
    const userInputFrequencies = new Map([
      [1n, 2],
      [2n, 1],
    ]);

    let updatedFrequencies = updateUserFrequencies(userInputFrequencies, thousandthDigitOfFibonacciSequence);
    updatedFrequencies = updateUserFrequencies(updatedFrequencies, thousandthDigitOfFibonacciSequence);

    expect(updatedFrequencies.get(1n)).toBe(2);
    expect(updatedFrequencies.get(2n)).toBe(1);
    expect(updatedFrequencies.get(thousandthDigitOfFibonacciSequence)).toBe(2);
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
