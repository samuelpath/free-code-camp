/*
  Write a function that splits an array (first argument) into groups the length of size (second argument) 
  and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i += size) {
    resultArray.push(arr.slice(i, i + size));
  }
  return resultArray;
}