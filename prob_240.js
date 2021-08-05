function searchMatrix(matrix, target) {
  let low = 0;
  let high = matrix[0].length - 1;
  let size = matrix.length - 1;
  while (low <= high) {
    let mid = low + Number.parseInt((high - low) / 2);
    if (low === high) {
      if (target >= matrix[0][low] && target <= matrix[size][low])
        return binarySearch(matrix, target, low);
    } else if (target >= matrix[0][mid] && target <= matrix[size][mid]) {
      if (binarySearch(matrix, target, mid)) return true;
      else low = mid + 1;
    } else high = mid - 1;
  }
}

function binarySearch(matrix, target, index) {
  let low = 0;
  let high = matrix.length - 1;
  while (low <= high) {
    let mid = low + Number.parseInt((high - low) / 2);
    if (target === matrix[mid][index]) return true;
    else if (target < matrix[mid][index]) high = mid - 1;
    else low = mid + 1;
  }
  return false;
}

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
let target = 20;
// console.log(searchMatrix(matrix, target));

// The aboove implementation is not optimized
