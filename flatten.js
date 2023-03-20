const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const flatten = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) { // The isArray() method returns true if an object is an array, otherwise false .
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]); // combines the two arrays
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = flatten;

//Test Codes
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1 , 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6, 7, 8]]), [1 , 2, 3, 4, 5, 6, 7, 8]);
