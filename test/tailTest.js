const tail = require('../tail');
// const assertEqual = require('../assertEqual'); not needed anymore.
const assert = require('chai').assert;

// Test Case: Check the returned array elements)

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

});