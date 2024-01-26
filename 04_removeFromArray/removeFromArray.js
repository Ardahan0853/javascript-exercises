const removeFromArray = function(array, ...args ) {
    return array.filter(arr => !args.includes(arr))
};


// Do not edit below this line
module.exports = removeFromArray;
