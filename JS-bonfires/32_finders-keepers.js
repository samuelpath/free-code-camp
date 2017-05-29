/*
  Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
*/

const findElement = (arr, func) => arr.filter(func)[0];