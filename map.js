const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = map