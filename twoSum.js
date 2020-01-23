/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const NOT_AN_INDEX = -1;
  const findIndex = function(nums, begin, value) {
    for (let i = begin; i < nums.length; i++) {
      if (nums[i] === value) {
        return i;
      }
    }
    return NOT_AN_INDEX;
  };

  for (let i = 0; i < nums.length - 1; i++) {
    let diff = target - nums[i];
    let j = findIndex(nums, i + 1, diff);
    if (j !== NOT_AN_INDEX) {
      return [i, j];
    }
  }
};
