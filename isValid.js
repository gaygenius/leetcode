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
    const closingMatch = closingDelimiter[currentChar];
    if (closingMatch) {
      // currentChar is opening delimeter
      delimiterStack.push(closingMatch);
    } else if (currentChar !== delimiterStack.pop()) {
      // currentChar did not close properly or stack is empty
      return false;
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
