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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object

const eqObjects = function(obj1, obj2) {
const key1 = Object.keys(obj1);
const key2 = Object.keys(obj2);

let result = true;

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

module.exports = eqObjects;

//Test codes//
const ab = { a: "1", b: "2", c: '4' };
const ba = { b: "2", a: "1", c: '5', };
assertEqual(eqObjects(ab, ba), false); // Passed (fales === false)

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false