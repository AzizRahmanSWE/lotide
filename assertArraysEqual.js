const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) { //iterates and compares every index
    if (array1[i] !== array2[i]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
};
 
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS