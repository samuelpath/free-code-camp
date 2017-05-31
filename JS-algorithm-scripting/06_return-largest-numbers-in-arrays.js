/*
  Return an array consisting of the largest number from each provided sub-array.
  For simplicity, the provided array will contain exactly 4 sub-arrays.
  Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function getLargestNumberOfTwo(num1, num2) {
  return (num1 > num2)
    ? num1
    : num2;
}

function getLargestNumberInNumbersMatrix(numbersMatrix) {
  const largestNumberInEachArray = numbersMatrix.map((numbersArray) => {
    numbersArray.reduce(getLargestNumberOfTwo);
  });
  return largestNumberInEachArray.reduce(getLargestNumberOfTwo);
}