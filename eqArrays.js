const assertEqual = require('./assertEqual');

const eqArrays = function (array1, array2) {
  
  for (let i = 0; i < array1.length; i++) { //iterates and compares every index
    if (array1[i] !== array2[i]) {
      // console.log("false")

      return false;
    }
  }

  // console.log("true");
  return true
};

module.exports = eqArrays;