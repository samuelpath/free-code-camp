/*
  Remove all falsy values from an array.
  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function removeFalsyValuesFromArray(arr) {
  return arr.filter(Boolean);
}