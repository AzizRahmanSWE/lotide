const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

const without = function (source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let match = false; //determines whether the current element of source array should be pushed to the result array.
    for(let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match  = true;
      }
    }
    if (!match) {
     result.push(source[i]);
    }
  }
  return result
};


//Test Cases//

console.log(without([1, 2, 3], [1]))
console.log(without([1, 2, 3, 45], [45, 2]))

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;