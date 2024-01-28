const fibonacci = function(count) {
    // checks argument's type and makes sure we use 
    // a number throughout rest of function.
    const fib = [0, 1];
    for (let i = 1; i < count; i++) {
    fib[i] = fib[i] + fib[i - 1];
    }
    return fib;

};

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.


module.exports = fibonacci;
