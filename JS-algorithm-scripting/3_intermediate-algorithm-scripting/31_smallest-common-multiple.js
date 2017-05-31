/*
  Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
    as well as by all sequential numbers in the range between these parameters.
  The range will be an array of two numbers that will not necessarily be in numerical order.
  e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const rangeValue = max - min + 1;
  const rangeArray = Array(rangeValue).fill().map((e, i) => i + min);
  return rangeArray.reduce((prev, curr) => {
    return smallestCommonsBetweenTwoNumbers(prev, curr);
  });
}

function smallestCommonsBetweenTwoNumbers(a, b) {
  const limit = a * b;
  const allMultiplesA = allMultiples(a, limit);
  const allMultiplesB = allMultiples(b, limit);
  const allCommons = allMultiplesA.filter((element) => {
    return allMultiplesB.indexOf(element) != -1;
  });
  return allCommons[0];
}

function allMultiples(num, limit){
  const multiples = [];
  const maxFactor = Math.ceil(limit / num);
  for (let i = 1; i <= maxFactor; i++){
    multiples.push(i * num);
  }
  return multiples;
}