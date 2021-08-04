// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

function findPeakElement(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = low + Number.parseInt((high - low) / 2);
    if (mid === 0) {
      if (nums.length === 1) return mid;
      else if (nums[mid] > nums[mid + 1]) return mid;
      else low = mid + 1;
    } else if (mid === nums.length - 1) {
      if (nums[mid] > nums[mid - 1]) return mid;
      else high = mid - 1;
    } else if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1])
      return mid;
    else if (nums[mid] < nums[mid + 1]) low = mid + 1;
    else high = mid - 1;
  }
}

let nums = [6, 5, 4, 3, 2, 3, 2];
console.log(findPeakElement(nums));
