const convertToCelsius = function(temperature) {
  let celsiusConversion = 0;
  celsiusConversion = (temperature-32) * 5/9;
  return celsiusConversion = Math.round(celsiusConversion * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheitConversion = 0;
  fahrenheitConversion = (temperature * 9/5) + 32;
  return fahrenheitConversion = Math.round(fahrenheitConversion * 10) / 10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
