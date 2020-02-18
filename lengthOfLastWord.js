/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let result = 0;
  let index = s.length - 1;
  if (index < 0) {
    return 0;
  }
  while (index > 0 && s[index] === " ") {
    --index;
  }
  while (index >= 0 && s[index] !== " ") {
    result++;
    index--;
  }
  return result;
};

console.log(lengthOfLastWord(""));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("   "));
console.log(lengthOfLastWord("xxx "));
