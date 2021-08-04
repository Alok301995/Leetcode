// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

//     [4,5,6,7,0,1,2] if it was rotated 4 times.
//     [0,1,2,4,5,6,7] if it was rotated 7 times.

// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

function findMin(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = low + Number.parseInt((high - low) / 2);
    if (nums[mid] >= nums[low] && nums[mid] <= nums[high]) return nums[low];
    else if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    else if (nums[mid] > nums[low]) low = mid;
    else high = mid;
  }
}

let nums = [1];
console.log(findMin(nums));

// time complexity O(logN)
