/*
  You will be provided with an initial array (the first argument in the destroyer function),
  followed by one or more arguments.
  Remove all elements from the initial array that are of the same value as these arguments.
*/

function removeFromArrayValuesInAdditionalArguments(arr, ...args) {
  return arr.filter(function(element) {
    for (let i = 0; i < args.length; i++) {
      if (element === args[i]) {
        return false;
      }
    }
    return true;
  });
}