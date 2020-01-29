/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const isPositiveMultipleOf10 = x > 0 && x % 10 === 0;
  // negative numbers and positive multiples of 10 are not palindromes
  if (x < 0 || isPositiveMultipleOf10) {
    return false;
  }
  let revertedLowerHalf = 0;
  let upperHalf = x;
  while (upperHalf > revertedLowerHalf) {
    revertedLowerHalf = revertedLowerHalf * 10 + (upperHalf % 10);
    upperHalf = Math.trunc(upperHalf / 10);
  }
  // for even number of digits, the upper half and reverted lower will be equal
  if (upperHalf === revertedLowerHalf) {
    return true;
  }
  // for an odd number of digits, the middle digit was reverted and can be ignored
  return upperHalf === Math.trunc(revertedLowerHalf / 10);
};
