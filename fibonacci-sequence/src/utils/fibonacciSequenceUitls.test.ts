import { calculateFibonacciSequence, isInFibonacciSequence } from "./fibonacciSequenceUitls";
const thousandthDigitOfFibonacciSequence = 43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n

describe('calculateFibonacciSequence', () => {
  it('should return an empty array for a sequence length of 0', () => {
    const result = calculateFibonacciSequence(0);
    expect(result).toEqual([]);
  });

  it('should return an empty array for a sequence length of less than zero', () => {
    const result = calculateFibonacciSequence(-100);
    expect(result).toEqual([]);
  });

  it('should return [0n] for a sequence length of 1', () => {
    const result = calculateFibonacciSequence(1);
    expect(result).toEqual([0n]);
  });

  it('should return the correct Fibonacci sequence for a given length', () => {
    const result = calculateFibonacciSequence(5);
    expect(result).toEqual([0n, 1n, 1n, 2n, 3n, 5n]);
  });

  it('should return the correct Fibonacci sequence for a larger length', () => {
    const result = calculateFibonacciSequence(8);
    expect(result).toEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n]);
  });

  it('should return the 1000th digit of the Fibonacci sequence given the length limit is 1000', () => {
    const result = calculateFibonacciSequence(1000);
    expect(result[result.length - 1]).toEqual(thousandthDigitOfFibonacciSequence);
  });
});

describe('isInFibonacciSequence', () => {
  it('should return true for a number that is in the Fibonacci sequence', () => {
    const sequence = calculateFibonacciSequence(5);
    const result = isInFibonacciSequence(sequence, 3n);
    expect(result).toBe(true);
  });

  it('should return true for a number that is at the start of the Fibonacci sequence', () => {
    const sequence = calculateFibonacciSequence(5);
    const result = isInFibonacciSequence(sequence, 0n);
    expect(result).toBe(true);
  });

  it('should return true for zero that is in the Fibonacci sequence of length 1', () => {
    const sequence = calculateFibonacciSequence(1);
    const result = isInFibonacciSequence(sequence, 0n);
    expect(result).toBe(true);
  });

  it('should return false for a number that is not in the Fibonacci sequence', () => {
    const sequence = calculateFibonacciSequence(5);
    const result = isInFibonacciSequence(sequence, 7n);
    expect(result).toBe(false);
  });

  it('should return false for an empty sequence', () => {
    const result = isInFibonacciSequence([], 5n);
    expect(result).toBe(false);
  });

  it('should return true for a very large number that is at the end of Fibonacci sequence', () => {
    const sequence = calculateFibonacciSequence(1000);
    const result = isInFibonacciSequence(sequence, thousandthDigitOfFibonacciSequence);
    expect(result).toBe(true);
  });

  it('should return false for a very large number that is not in the Fibonacci sequence', () => {
    const sequence = calculateFibonacciSequence(1000);
    const thousandthDigitOfFibonacciSequenceMinusOne = thousandthDigitOfFibonacciSequence - 1n
    const result = isInFibonacciSequence(sequence, thousandthDigitOfFibonacciSequenceMinusOne);
    expect(result).toBe(false);
  });


});
