/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const withinRange = n => {
    const MIN_RESULT = -(2 ** 31);
    const MAX_RESULT = 2 ** 31 - 1;
    return MIN_RESULT <= n && n <= MAX_RESULT;
  };
  const result =
    Math.sign(x) *
    Number(
      Math.abs(x)
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  return withinRange(result) ? result : 0;
};
