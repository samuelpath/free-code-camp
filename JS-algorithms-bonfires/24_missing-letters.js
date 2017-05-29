/*
  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.
*/

function findMissingLetterInRange(str) {
  str.split('').forEach((curr, idx) => {
    if (str.charCodeAt(idx + 1) !== str.charCodeAt(idx) + 1) {
      return String.fromCharCode(str.charCodeAt(idx) - 1);
    }
  });
}