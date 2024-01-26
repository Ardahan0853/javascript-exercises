const repeatString = function(string, num) {
    let sumOfStrings = ''
    for(let i = 0; i < num; i++){
        
        sumOfStrings += string
        
    }if(num < 0){
        sumOfStrings = "ERROR"
    }
    return sumOfStrings
};

// Do not edit below this line
module.exports = repeatString;
