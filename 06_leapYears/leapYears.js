const leapYears = function(leapYear) {
    if(leapYear % 4 === 0 || leapYear % 400 === 0){
        if(leapYear % 100 != 0 || leapYear % 400 === 0){
            return true;
        }else{
            return false;
        }
    }else{
       return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
