//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(sentence) {
  let result = {};
  for (let letter of sentence) {
    if (letter.trim().length > 0) { //if no a space. checks if not a space.(.trim) removes whitespace from both ends of a string.
      if (!result[letter]) //if result does not contains the letter.
        result[letter] = 0; // initializes the letter to 0.
      result[letter]++; //inciments by 1
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));