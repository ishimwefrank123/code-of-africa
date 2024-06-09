function hasSubarrayWithTargetSum(arr, target) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
      currentSum += arr[end];

      // If currentSum exceeds the target, shrink the window from the left
      while (currentSum > target && start <= end) {
          currentSum -= arr[start];
          start++;
      }

      // Check if currentSum equals the target
      if (currentSum === target) {
          return true;
      }
  }

  return false;
}
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); 
