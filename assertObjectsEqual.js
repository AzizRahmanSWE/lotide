const { assert } = require('console');

const eqObjects = function(obj1, obj2) {
  
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  let result = true
    if (key1.length !== key2.length) { //checks number of keys/length of both objects are the same.
    return false
    }
  
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
    return result
  };

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//console.log(`Example label: ${inspect(actual)}`);
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true)