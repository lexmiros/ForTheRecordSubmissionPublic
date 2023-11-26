export const calculateFibonacciSequence = (sequenceLength : number): Array<bigint> =>  {
  const fibonacciSequence: bigint[] = [0n, 1n];
  
  if (sequenceLength <= 0) {
    return [];
  }

  if (sequenceLength === 1) {
    return [0n];
    
  }

  while (fibonacciSequence.length <= sequenceLength) {
    fibonacciSequence.push(
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2]
    );
  }

  return fibonacciSequence
};

export const isInFibonacciSequence = (fibonacciSequence: Array<bigint>, number: bigint): boolean => {
  return fibonacciSequence.includes(number);
};
