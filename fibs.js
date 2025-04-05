function fibs(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result;
  }
}

function fibsRec(n) {
  // Base cases
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    // Recursive step
    const prevArray = fibsRec(n - 1);
    const nextFib = prevArray[prevArray.length - 1] + prevArray[prevArray.length - 2];
    return [...prevArray, nextFib];
  }
}

// Test cases
console.log("fibs(0):", fibs(0)); // Expected: []
console.log("fibs(1):", fibs(1)); // Expected: [0]
console.log("fibs(2):", fibs(2)); // Expected: [0, 1]
console.log("fibs(5):", fibs(5)); // Expected: [0, 1, 1, 2, 3]
console.log("fibs(8):", fibs(8)); // Expected: [0, 1, 1, 2, 3, 5, 8, 13]

console.log("\nfibsRec(0):", fibsRec(0)); // Expected: []
console.log("fibsRec(1):", fibsRec(1)); // Expected: [0]
console.log("fibsRec(2):", fibsRec(2)); // Expected: [0, 1]
console.log("fibsRec(5):", fibsRec(5)); // Expected: [0, 1, 1, 2, 3]
console.log("fibsRec(8):", fibsRec(8)); // Expected: [0, 1, 1, 2, 3, 5, 8, 13]
