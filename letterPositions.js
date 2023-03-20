const assertArraysEqual = require('./assertArraysEqual')

const countLetters = function(sentence) {
  let result = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = []; 
        result[sentence[i]].push(i);
      }
    }
  }
  return result;
};

module.exports = countLetters;

///////////// TEST CODE

// assertArraysEqual(countLetters("hello").e, [1]);
// assertArraysEqual(countLetters("hello").l, [2, 3])
// assertArraysEqual(countLetters("hello").h, [0])
// assertArraysEqual(countLetters("hello").o, [4])