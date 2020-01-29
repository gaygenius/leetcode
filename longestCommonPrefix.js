/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let i = 0;
  const first = strs[0];
  const rest = strs.slice(1);
  while (i < first.length) {
    if (rest.findIndex(str => first[i] !== str[i]) !== -1) {
      break;
    }
    i++;
  }
  return first.slice(0, i);
};
