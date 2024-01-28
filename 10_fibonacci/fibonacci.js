const fibonacci = function(count) {
    if(count < 0){
        return "OOPS"
    }
    const fib = [0, 1];
    for (let i = 2; i <= count; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;

};

// Do not edit below this line
module.exports = fibonacci;
// function isNumber(num){
    //     return typeof num === 'number'
    // }
    // if(!isNumber(number)){
        
    //     let convertedNumber = parseInt(number) 
    //     if(convertedNumber === 0){
    //         return convertedNumber
    //     }else{
    //         return fibonacci(convertedNumber - 1) + fibonacci(convertedNumber - 2)
    //     }
       
    // }else{
    //     if(number <= 2 && number != 0){
    //         return 1;
    //     }else{
    //         return fibonacci(number - 1) + fibonacci(number - 2);
    //     }
    // }