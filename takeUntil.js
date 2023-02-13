const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) { //iterates and compares every index
    if (array1[i] !== array2[i]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
};
 
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS


const takeUntil = function(array, callback) {
  let result = [];

  for (let values of array) {
    if (callback(values)) {//checks for a truthy callback.
      return result;
    } else {
      result.push(values);//else pushes the value into the empty array result.
    }
  }
  return result;
};

//Test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);//keeps on iterating until x is less than 0.
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');//keeps on iterating until x is strictly equal to (,).
console.log(results2);

assertArraysEqual(results1, [
  1, 2, 5, 7, 2
]);