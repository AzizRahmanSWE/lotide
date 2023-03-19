const assertEqual = require('./assertEqual');

//Challenge:
//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
//If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {//checks if the callback returns truthy.
      return key;//returns the key once true.
    }
  }
  return undefined;//returns undefined when the callback is never true.
};

//callback function
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3); // => "Akaleri"

//test
assertEqual(result, "Akaleri");

module.exports = findKey;