/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const closingDelimiter = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const delimiterStack = [];
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if ("([{".indexOf(currentChar) !== -1) {
      delimiterStack.push(currentChar);
    } else if (delimiterStack.length === 0) {
      return false;
    } else {
      const expectedClosingDelimiter = closingDelimiter[delimiterStack.pop()];
      if (currentChar !== expectedClosingDelimiter) {
        return false;
      }
    }
  }
  return delimiterStack.length === 0;
};

console.log("[", isValid("["));
console.log("()", isValid("()"));
console.log("()[]{}", isValid("()[]{}"));
console.log("(]", isValid("(]"));
console.log("([)]", isValid("([)]"));
console.log("{[]}", isValid("{[]}"));
