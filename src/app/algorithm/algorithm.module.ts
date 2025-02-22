export class AlgorithmModule {
  static findMajorityNumber = (input: string = '') => {
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

  static findMajorityNumber1 = (input: string) => {
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
}
