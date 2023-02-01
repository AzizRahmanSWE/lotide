//takes any command line argument, all strings, and reverse them.



const array = process.argv.splice(2);

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString);
