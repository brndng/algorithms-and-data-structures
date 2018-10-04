// Given integer n, find nth number in Fibonacci sequence
// Use memoization to avoid duplicate calculations

const fibonacciFinderMemoized = (n) => {
  const memo = {};

  const fibonacciFinder = (n) => {
    if (n === 0 || n === 1) return n;

    if (memo.hasOwnProperty(n)) {
      return memo[n];
    }
    const result = fibonacciFinder(n - 1) + fibonacciFinder(n - 2);
    memo[n] = result;
    return result;
  }

  return fibonacciFinder(n);
}
