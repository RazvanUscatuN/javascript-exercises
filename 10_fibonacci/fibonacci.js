const fibonacci = function (number) {
  number = parseInt(number);

  if (number < 0) return "OOPS";

  let currentNumber = 0;
  let increment = 0;
  let placeHolder = 0;

  for (let i = 0; i < number; i++) {
    if (i == 0) {
      currentNumber++;
    } else if (i == 1) {
      increment++;
    } else {
      placeHolder = currentNumber;
      currentNumber += increment;
      increment = placeHolder;
    }
  }

  return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
