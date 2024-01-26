const convertToCelsius = function(num) {
  let celcius = 0
  celcius = ( num - 32) / 1.8;
  const rounded = Math.round(celcius * 10) / 10
  return rounded;

};

const convertToFahrenheit = function(num) {
  let fahrenheit = 0
  fahrenheit = (num * 1.8) + 32;
  const rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
