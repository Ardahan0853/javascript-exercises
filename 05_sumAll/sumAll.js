const sumAll = function(num1, num2) {
   let newArray = [];
   let sumOfAll = 0;
   if(typeof num1 && typeof num2 === 'number' ){
    if(num1 > 0 && num2 > 0){
        if(num1 < num2){
            for(let i = num1; i <= num2; i++){
                newArray.push(i);
            }
        }else if(num1 > num2){
            for(let i = num2; i <= num1; i++){
                newArray.push(i);
            }
        }
    }else{
        return "ERROR"
    }
   }else{
    return "ERROR"
   }
   newArray.forEach(item => sumOfAll += item);
   return sumOfAll;
    
};

// Do not edit below this line
module.exports = sumAll;
