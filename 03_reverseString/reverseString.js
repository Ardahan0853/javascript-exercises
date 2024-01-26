const reverseString = function(string) {
    let splitString = string.split("");
    let reversedString = splitString.reverse();
    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
