/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  }
  const countAndSayStr = str => {
    if (str.length === 0) {
      return "";
    }
    let i = 1;
    while (str[i] === str[0]) {
      i++;
    }
    return `${i}${str[0]}${countAndSayStr(str.substring(i))}`;
  };
  let str = "1";
  while (n > 1) {
    str = countAndSayStr(str);
    n--;
  }
  return str;
};

console.log(1, countAndSay(1));
console.log(2, countAndSay(2));
console.log(4, countAndSay(4));
