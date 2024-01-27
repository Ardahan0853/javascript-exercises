const palindromes = function (string) {

    const reversedString = string.split("").reverse().join("").toLowerCase()
    const regexString = reversedString.replace(/[^a-z0-9]/g, "")
    const realString = string.toLowerCase().replace(/[^A-z0-9]/g, "");

    return regexString ==  realString



    // const lowerCase = string.toLowerCase();
    // const regexCase = lowerCase.replace(/[^a-z0-9]/g, "")
    // const splittedCase = regexCase.split("")
    // const reversedCase = splittedCase.reverse()
    // const joinedCase = reversedCase.join("")

    // return(`${lowerCase}\n ${regexCase} \n ${splittedCase} \n ${reversedCase} \n ${joinedCase} \n ${string.toLowerCase()}`)
    // return joinedCase == regexCase

    
};

// Do not edit below this line
module.exports = palindromes;

// .string.split("").reduce((a , b) => b + a, "").toLowerCase()