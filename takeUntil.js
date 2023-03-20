const assertArraysEqual = require('./assertArraysEqual')

const takeUntil = function(array, callback) {
  let result = [];

  for (let values of array) {
    if (callback(values)) {
      return result;
    } else {
      result.push(values);
    }
  }
  return result;
};

//Test Code
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);//keeps on iterating until x is less than 0.
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');//keeps on iterating until x is strictly equal to (,).
// console.log(results2);

// assertArraysEqual(results1, [
//   1, 2, 5, 7, 2
// ]);

module.exports = takeUntil;