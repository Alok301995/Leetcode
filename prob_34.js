// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

function searchRange(nums, target) {
  let first = helper(nums, target);
  let last = helper(nums, target + 1) - 1;
  console.log(first, last);
  if (first <= last) return [first, last];
  else return [-1, -1];
}

function helper(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let firstPosition = nums.length;
  while (low <= high) {
    let mid = low + Number.parseInt((high - low) / 2);
    if (target <= nums[mid]) {
      firstPosition = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return firstPosition;
}

let nums = [1];
let target = 1;

console.log(searchRange(nums, target));
