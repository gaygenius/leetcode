/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const diffMap = {};
  for (let i = 0; i < nums.length; i++) {
    const diffLookup = diffMap[nums[i]];
    if (diffLookup >= 0) {
      return [diffLookup, i];
    }
    diffMap[target - nums[i]] = i;
  }
};
