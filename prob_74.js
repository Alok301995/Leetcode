// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

//     Integers in each row are sorted from left to right.
//     The first integer of each row is greater than the last integer of the previous row.

function searchMatrix(matrix, target) {
  let low = 0;
  let high = matrix.length - 1;
  let size = matrix[0].length - 1;
  console.log(low, high, size);
  while (low <= high) {
    let mid = low + Number.parseInt((high - low) / 2);
    console.log("low, high mid", low, high, mid, matrix[mid][0]);
    if (low === high) {
      if (target >= matrix[low][0] && target <= matrix[low][size])
        return binarySearch(matrix[low], target);
      else return false;
    } else if (target >= matrix[mid][0] && target <= matrix[mid][size])
      return binarySearch(matrix[mid], target);
    else if (target < matrix[mid][0]) high = mid - 1;
    else low = mid + 1;
  }
  return false;
}

function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = low + Number.parseInt((high - low) / 2);
    if (target === nums[mid]) return true;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}

let matrix = [[1], [3]];
let target = 5;

// the above approch is double binary search

// second approch

// in this approch we are going to map 2D array in 1 D array and apply the binary search and then time complexity would be Log(M*N)

function matrixSearchOptimzed(matrix, target) {
  let low = 0;
  let m = matrix.length;
  let size = matrix[0].length;
  let high = m * size - 1;
  while (low < high) {
    let mid = low + Number.parseInt((high - low) / 2);
    if (target === matrix[Math.floor(mid / size)][mid % size]) return true;
    else if (target > matrix[Math.floor(mid / size)][mid % size]) low = mid + 1;
    else high = mid - 1;
  }
  if (target === matrix[Math.floor(low / size)][low % size]) return true;
  else return false;
}

// console.log(matrixSearchOptimzed(matrix, target));
