/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const willOverflow = (partialResult, remainder) => {
    const MIN_RESULT_MINUS_DIGIT = Math.trunc(-(2 ** 31) / 10); // -(2 ** 31) === -2147483648
    const MAX_RESULT_MINUS_DIGIT = Math.trunc((2 ** 31 - 1) / 10); // 2 ** 31 - 1 = 2147483647
    return (
      partialResult < MIN_RESULT_MINUS_DIGIT ||
      (partialResult === MIN_RESULT_MINUS_DIGIT && remainder < -8) ||
      partialResult > MAX_RESULT_MINUS_DIGIT ||
      (partialResult === MAX_RESULT_MINUS_DIGIT && remainder > 7)
    );
  };
  let result = 0;
  let remainder = x;
  while (remainder !== 0) {
    if (willOverflow(result, remainder)) return 0;
    result = result * 10 + (remainder % 10);
    remainder = Math.trunc(remainder / 10);
  }
  return result;
};
