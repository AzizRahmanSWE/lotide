const eqArrays = require('./eqArrays');
 
const assertArraysEqual = require('./assertArraysEqual')

const countLetters = function(sentence) {
  let result = {}; // return the result in an object

  for (let i = 0; i < sentence.length; i++) {// loop thru the sentence
    if (sentence[i] !== ' ') {// filters out the space
      if (result[sentence[i]]) { // if the letter exists in the result ALREADY,
        result[sentence[i]].push(i); // push the index to that array
      } else {
        result[sentence[i]] = []; // if the letter does NOT exist, create a new array
        result[sentence[i]].push(i); // push the index into the new array
      }
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;

///////////// TEST CODE

assertArraysEqual(countLetters("hello").e, [1]);
assertArraysEqual(countLetters("hello").l, [2, 3])
assertArraysEqual(countLetters("hello").h, [0])
assertArraysEqual(countLetters("hello").o, [4])