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

 const assertArrayEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
 };

// assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)