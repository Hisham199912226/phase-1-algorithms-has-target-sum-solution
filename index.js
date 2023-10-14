function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for(const number of array){
    const complement = target - number;

    if (seenNumbers.has(complement)) return true;

    seenNumbers.add(number);
  }
  return false;
}

/* 
  Time Complexity: O(n)
*/

/* 
  create set to store unique values
  iterate over array from the beginning to the end
    calculate complement by subtracting number from target
    check the Set if it has complement to return true and stop
    add number to the Set
  return false if we reach to the end of array without finding any complement
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
