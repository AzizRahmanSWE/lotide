const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

// takes in an array and return the middle-most element(s) of the given array in another array.

const middle = function (array) {
  let middle = [];
  if (array.length <= 2) { //checks if the array length is equal or less than 2
    return middle;
  }
  if (array.length % 2 === 0) { //if array length is even, then
    middle.push(array[array.length / 2 - 1]); //adds the first middle element.
    middle.push(array[array.length / 2]); //adds the second middle element.
  } else { //if array length is odd, then
    middle.push(array[Math.floor(array.length / 2)]);
  }           
  return middle;
};

module.exports = middle;