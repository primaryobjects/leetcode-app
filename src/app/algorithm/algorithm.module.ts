import { first } from "rxjs";

export class AlgorithmModule {
  static findMajorityNumber = (input: string) => {
    let result: string | undefined = undefined;

    let symbols: string[] = input.split(',');

    let count = 0;
    for (let i = 0; i < symbols.length; i++) {
      if (count === 0) {
        result = symbols[i];
        count++;
      } else if (result === symbols[i]) {
        count++;
      } else {
        count--;
      }
    }

    return result;
  }

  static findMajorityNumberHash = (input: string = '') => {
    let result: string | undefined = undefined;

    const hash: { [id: string] : number } = {};
    const symbols: string[] = input.split(',');

    // Count each symbol in memory.
    symbols.forEach(symbol => {
      // Increment count for the symbol.
      hash[symbol] = hash[symbol] ? hash[symbol] + 1 : 1;

      // See if this is the new most frequent symbol.
      result = result === undefined || hash[symbol] > hash[result] ? symbol : result;
    });

    return result;
  }

  static fibonacci = (input: string) => {
    let result: number = 0;

    const count: number = parseInt(input);
    let firstValue = 0;
    let secondValue = 1;

    // Base-case: fib[0] = 0, fib[1] = 1.
    if (count === 0) {
      result = 0;
    }
    else {
      result = 1;
    }

    for (let i = 1; i < count; i++) {
      result = firstValue + secondValue;

      firstValue = secondValue;
      secondValue = result;
    }

    return result;
  }

  static fibonacciRec = (input: string) => {
    let result: number = 0;

    const count: number = parseInt(input);

    // Base-case: fib[0] = 0, fib[1] = 1.
    if (count === 0) {
      result = 0;
    }
    else if (count === 1) {
      result = 1;
    }
    else {
      result = this.fibonacciRec((count - 2).toString()) + this.fibonacciRec((count - 1).toString());
    }

    return result;
  }

  static fibonacciN = (input: string) => {
    let result: string = '';
    const n = parseInt(input);

    for (let i=0; i<n; i++) {
      result += this.fibonacci(i.toString()) + ',';
    }

    return result;
  }
}
