/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let lowIndex = 0;
  let highIndex = 1;
  while (highIndex < nums.length) {
    if (nums[lowIndex] !== nums[highIndex]) {
      lowIndex++;
      nums[lowIndex] = nums[highIndex];
    }
    highIndex++;
  }
  return lowIndex + 1;
};

let nums = [1, 1, 2];
console.log(removeDuplicates(nums), nums);
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums), nums);
nums = [];
console.log(removeDuplicates(nums), nums);
