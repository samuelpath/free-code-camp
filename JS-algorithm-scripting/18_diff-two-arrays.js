/*
  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
  In other words, return the symmetric difference of the two arrays.
*/

function getItemsOnlyFoundInOneOfTwoArr(arr1, arr2) {
  const itemsFoundInArr1ButNotArr2 = arr1.filter(value => arr2.indexOf(value) < 0);
  const itemsFoundInArr2ButNotArr1 = arr2.filter(value => arr1.indexOf(value) < 0);
  return itemsFoundInArr1ButNotArr2.concat(itemsFoundInArr2ButNotArr1);
}