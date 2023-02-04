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

//console.log(middle([1])) // => []
//console.log(middle([1, 2])) // => []
//console.log(middle([1, 2, 3])) // => [2]
//console.log(middle([1, 2, 3, 4, 5])) // => [3]
//console.log(middle([1, 2, 3, 4])) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]