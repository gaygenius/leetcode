/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length;
  while (low < high) {
    let mid = Math.trunc(low + (high - low) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (target < nums[mid]) {
      // in the range [low, mid)
      high = mid;
    } else {
      // in the range (mid, high]
      low = mid + 1;
    }
  }
  return low;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
