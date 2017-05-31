/*
  Flatten a nested array.
  You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  while (!isArrayFlat(arr)) {
    arr = arr.reduce(function(pre, cur) {        
      return pre.concat(cur);
    }, []);
  }
  return arr;
}

const isArrayFlat = (arr) => arr.every(isNotArray);

const isNotArray = (arg) => !Array.isArray(arg);