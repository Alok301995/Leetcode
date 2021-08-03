// Implementation of different cases of binary search

// [0,0,1,1,1,1,1] Find the first occurence of 1 in the array ; this type of function are also called predicate functions

function binSearchPredicate(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = low + Number.parseInt((high - low) / 2);
    if (nums[mid] === 1) high = mid;
    else low = mid + 1;
  }
  if (nums[low] === 1) return low;
  else return -1;
}

// Binary Seach on increasing sequence with repeated elements

// Concept : we have to run binary search two time in order to find the range of given element ;
