function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller one to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from the left or right array
  // (One of them will have remaining elements, the other will be empty)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  // Base case: An array with 0 or 1 element is already sorted
  if (arr.length < 2) {
    return arr;
  }

  // Recursive step: Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursively sort each half and merge the results
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

// Test cases
const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

console.log(`Input: [${arr1}]`);
console.log(`Output: [${mergeSort(arr1)}]`); // Expected: [0, 1, 1, 2, 3, 5, 8, 13]

console.log(`\nInput: [${arr2}]`);
console.log(`Output: [${mergeSort(arr2)}]`); // Expected: [79, 100, 105, 110]
