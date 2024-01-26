const add = function(num, num2) {
	return num + num2;
};


const subtract = function(num, num2) {
	return num - num2;
};

const sum = function(num) {
  let summary = 0
  for(let i = 0; i < num.length; i++){
    summary += num[i]
  }
  return summary
};

const multiply = function(arr) {
  return arr.reduce((a , b) => {
    return a * b
  })
};

const power = function(power, number) {
	let result = Math.pow(power, number);
  return result;
};

const factorial = function(number) {
  let result = number;
  if(number === 0 || number === 1){
    result = 1;
  }else{
    for(let i = number; i != 1; i--){
      result = result * (i - 1);
    }
  }
	
  return result;
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
