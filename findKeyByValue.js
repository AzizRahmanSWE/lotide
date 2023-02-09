// Instruction
// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {//iterates over the properties of the object.
    if (object[key] === value) {//checks if the object key matches the value.
      return key;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  "drama":  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine Nine"), "drama");//no dash.
assertEqual(findKeyByValue(bestTVShowsByGenre, "the expanse"), undefined);//lowercase.