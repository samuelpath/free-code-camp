/*
  Create a function that sums two arguments together.
  If only one argument is provided, then return a function that expects one argument and returns the sum.
  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
  Calling this returned function with a single argument will then return the sum:
    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.
  If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  const args = [...arguments];
  
  if (!args.every(isNumber)) {
    return undefined;
  }
  
  if (args.length === 1) {
    return toAdd(args[0]);
  } else if (args.length === 2) {
    return args[0] + args[1];
  } else {
    return undefined;
  }
}

const toAdd = (num) => {
  isNumber(num)
    ? args[0] + num
    : undefined;
}

const isNumber = (arg) => (typeof arg === 'number');