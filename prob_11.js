// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

function maxArea(height) {
  let max = 0;
  let low = 0;
  let high = height.length - 1;

  while (low != high) {
    if (height[low] < height[high]) {
      max = Math.max(max, height[low] * (high - low));

      low++;
    } else {
      max = Math.max(max, height[high] * (high - low));
      high--;
    }
  }
  return max;
}
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
