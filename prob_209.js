// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Very important concept

function minSubArrayLen(nums, target) {
  let currentSum = 0;
  let count = Number.MAX_VALUE;
  let leftIndex = 0;
  let rightIndex = 0;
  while (rightIndex <= nums.length) {
    if (currentSum < target) {
      currentSum += nums[rightIndex];
      rightIndex++;
    } else {
      count = Math.min(count, rightIndex - leftIndex);
      if (currentSum - nums[leftIndex] >= target) {
        currentSum = currentSum - nums[leftIndex];
        leftIndex++;
      } else {
        currentSum = currentSum + nums[rightIndex];
        rightIndex++;
      }
    }
  }
  if (count === Number.MAX_VALUE) return 0;
  else return count;
}
