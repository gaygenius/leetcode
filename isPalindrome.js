/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let remainder = x;
  const digits = [];
  while (remainder > 0) {
    const digit = remainder % 10;
    digits.push(digit);
    remainder = (remainder - digit) / 10;
  }
  const maxIndex = digits.length - 1;
  let i = 0;
  while (i * 2 < maxIndex) {
    if (digits[i] !== digits[maxIndex - i]) {
      return false;
    }
    i++;
  }
  return true;
};
