//takes any command line argument, all strings, and reverse them.



const array = process.argv.splice(2);

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
for (let i = 0; i < array.length; i++) {
  console.log(reverseString(array[i])); //adds and prints out reversed string.
}

//console.log(reverseString);
