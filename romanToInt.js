/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanDigitValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let intValue = 0;
  let romanDigits = s.split("");
  while (romanDigits.length > 0) {
    const currentRomanDigit = romanDigits.shift();
    const currentDigitValue = romanDigitValue[currentRomanDigit];
    const nextDigitValue = romanDigitValue[romanDigits[0]];
    if (nextDigitValue && currentDigitValue < nextDigitValue) {
      intValue += nextDigitValue - currentDigitValue;
      romanDigits.shift();
    } else {
      intValue += currentDigitValue;
    }
  }
  return intValue;
};
