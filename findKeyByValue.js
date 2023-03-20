const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
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


//Test Cases Using assertEqual.
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine Nine"), "drama");//no dash.
// assertEqual(findKeyByValue(bestTVShowsByGenre, "the expanse"), undefined);//lowercase.


module.exports = findKeyByValue;

