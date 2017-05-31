/*
  We'll pass you an array of two numbers.
  Return the sum of those two numbers and all numbers between them.

  The lowest number will not always come first.
*/

function sumAll(arr) {
  let result = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    result += i;
  }
  return result;
}