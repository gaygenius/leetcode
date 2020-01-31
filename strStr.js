/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const isNeedleAt = j => {
    for (let h = 0; h < needle.length; h++) {
      if (haystack[j + h] !== needle[h]) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (isNeedleAt(i)) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("hell", "ll"));
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
