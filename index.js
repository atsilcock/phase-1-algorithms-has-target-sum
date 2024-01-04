function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2) 
    - whatever number is pluged in to n will grow by a factor of 2 - represents O
    - We consider the quadratic function here
    - Finally - we consider the nested loops -  Imagine you have a loop inside another loop. 
      Each time the outer loop runs, the inner loop runs completely. So, if the outer loop runs 
      n times and the inner loop also runs n times for each of those outer iterations, 
      you end up with n * n = n^2 total operations.

*/

/* 
  Add your pseudocode here
  - Iterate through each element in the array (i)
    - For each element, iterate through the rest of the array (j)
      - Check if the current element and any subsequent element add up to the target
        - If yes, return true
  - If no pair is found, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;



