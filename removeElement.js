/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

let nums = [3, 1, 2, 1, 2];
console.log(removeElement(nums, 1), nums);
nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums, 2), nums);
nums = [];
console.log(removeElement(nums, 1), nums);
