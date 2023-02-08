const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) { //checks if the current 'item' in the 'allItem' exits in the 'itemsToCount' object. 'of' checks the item string value.
    console.log(item);
    if (itemsToCount[item]) { // if true (it) does, then it will add 1 to the value of the key in the 'result' object.
      if (results[item]) { //checks if the current item exist in the result array. incimentts by 1 if it does exit.
        results[item] += 1;
      } else { //if it doesn exist it creates a new key and sets its value to 1.
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result["Jason"], 1);
assertEqual(result["Karima"], undefined);
assertEqual(result["Fang"], 2);
assertEqual(result["Agouhanna"], undefined);

// assertEqual(result["Jason"], 1);
// assertEqual(result["Karima"], undefined);
// assertEqual(result["Fang"], 2);
// assertEqual(result["Agouhanna"], undefined);