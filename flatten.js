const { eq } = require("lodash");

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) { //iterates and compares every index
     if (array1[i] !== array2[i]) {
       console.log("false")
       return false;
     }
   }
  console.log("true");
  return true
};

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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1 , 2, 3, 4, 5, 6]);

