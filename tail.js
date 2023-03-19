const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length > 1) {
    return array.slice(1);
  } else {
    return [];
  }
};

//exports the function tail.
module.exports = tail;
