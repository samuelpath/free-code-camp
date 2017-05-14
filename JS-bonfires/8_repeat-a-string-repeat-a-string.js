/*
  Repeat a given string (first argument) num times (second argument).
  Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  let strFinal = "";
  for (let i = 0; i < num; i++) {
    strFinal += str;
  }
  return strFinal;
}