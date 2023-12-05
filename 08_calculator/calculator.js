const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (sumArray) {
  return sumArray.reduce((a, b) => a + b, 0);
};
const multiply = function (array) {
  return array.reduce((a, b) => a * b, 1);
};

const power = function (number, atPower) {
  return Math.pow(number, atPower);
};

const factorial = function (factorialNumber) {
  if(factorialNumber == 0) return 1;

  let total = 1;
  for(let i = 1; i <= factorialNumber; i++) total *= i;
  
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
