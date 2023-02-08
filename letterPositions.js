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

const countLetters = function(sentence) {
  let result = {}; // return the result in an object

  for (let i=0; i < sentence.length; i++) { // loop thru the sentence 
    if (sentence[i] !== ' ') { // filters out the space
      if (result[sentence[i]]) { // if the letter exists in the result ALREADY, 
        result[sentence[i]].push(i) // push the index to that array
      } else {
        result[sentence[i]] = []; // if the letter does NOT exist, create a new array
        result[sentence[i]].push(i) // push the index into the new array
      }
    }
  }
  return result
}


console.log(countLetters("lighthouse in the house"))

///////////// TEST CODE

assertArraysEqual(countLetters("hello").e, [1]);