const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
	return sum;
// initialValue = 0;
// arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);  
};

const multiply = function(arr) {
  let total = 1;
  for (i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
	return total;

// arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(x, y) {
  total = 1;
// works only for positive y
  if (y === 0) {
    return 1;
  }
  for (i=0; i < y; i++) {
    total *= x;
  }
  return total;
// return Math.pow(x, y);
};

const factorial = function(x) {
  total = 1;
  for (i = x; i > 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
