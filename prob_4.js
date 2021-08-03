// Median of two sorted array

// function partition(nums1, nums2) {
//   let mid1 = Number.parseInt((nums1.length - 1) / 2);
//   let mid2 = Number.parseInt((nums2.length - 1) / 2);

//   while (mid1 + mid2 + 2 !== nums1.length) {
//     if (mid2 >= 0) {
//       mid2--;
//     } else if (mid1 < nums1.length) {
//       mid1++;
//     }
//   }
//   while (nums1[mid1] > nums2[mid2 + 1] || nums2[mid2] > nums1[mid1 + 1]) {
//     mid1++;
//     mid2--;
//   }
//   console.log(nums1[mid1], nums2[mid2]);
// }

// let nums1 = [1, 2];
// let nums2 = [3, 4];

// partition(nums1, nums2);

function numIndenticalPairs(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) map[nums[i]] = 1;
    else {
      let count = map[nums[i]];
      map[nums[i]] = count + 1;
    }
  }
  let count = 0;
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    let len = map[keys[i]];
    count = count + (len * (len - 1)) / 2;
  }
  return count;
}

let nums = [1, 1, 1, 1];
// numIndenticalPairs(nums)

function numsInJewel(jewel, stones) {
  let map = {};

  for (let i = 0; i < stones.length; i++) {
    if (map[stones[i]] === undefined) map[stones[i]] = 1;
    else map[stones[i]] = map[stones[i]] + 1;
  }
  let count = 0;
  for (let i = 0; i < jewel.length; i++) {
    count = count + map[jewel[i]];
  }
  return count;
}
let jewels = "aA";
let stones = "aAAbbbb";

console.log(numsInJewel(jewels, stones));
