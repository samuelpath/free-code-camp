/*
  Return the remaining elements of an array after chopping off n elements from the head.
  The head means the beginning of the array, or the zeroth index.
*/

function getArrayWithElementsChoppedFromHead(arr, nbOfElementsToChopFromHead) {
  arr.splice(0, nbOfElementsToChopFromHead);
  return arr;
}