const assert = require('chai').assert;
const middle = require('../middle');


//Test Code
// console.log(middle([1, 7, 6, 8, 5, 4])); // = [ 6, 8 ]
// console.log(middle([1, 7, 6, 8, 5])); // = [ 6 ]

describe("#middle", () => {
  it("returns [] for [1, 7]", () => {
    assert.deepEqual(middle([1, 7]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("returns [6, 8] for [1, 7, 6, 8, 5, 4]", () => {
    assert.deepEqual(middle([1, 7, 6, 8, 5, 4]), [6, 8]);
  });

  it("returns [6] for [1, 7, 6, 8, 5]", () => {
    assert.deepEqual(middle([1, 7, 6, 8, 5]), [6]);
  });

});