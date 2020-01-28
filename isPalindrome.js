/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  console.log("isPalindrome", x);
  const s = x.toString();
  return (
    s
      .split("")
      .reverse()
      .join("") === s
  );
};
