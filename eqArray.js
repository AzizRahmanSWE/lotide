const { eq } = require("lodash");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
