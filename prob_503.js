// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

// Naive solution

function nextGreaterElements(nums) {
  for (let i = 0; i <= nums.length - 1; i++) {
    let temp = nums[i];
    nums[i] = -1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > temp) {
        nums[i] = nums[j];
        break;
      }
    }
  }
  console.log(nums);
}

let nums = [18, 7, 6, 12, 15];

nextGreaterElements(nums);
