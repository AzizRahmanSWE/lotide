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

const words = ["ground", "control", "to", "major", "tom", "aziz", "bobby"];

//will take in two arguments: array, callback
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const result1 = map(words, word => word[0]);
console.log(result1);


//test case///
assertArraysEqual(result1, ['g', 'c', 't', 'm', 't', 'a', 'b']);