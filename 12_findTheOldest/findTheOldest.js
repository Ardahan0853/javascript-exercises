const findTheOldest = function(person) {
    
    const newArr = person.map(item => item.yearOfDeath - item.yearOfBirth)
    const newArrSorted = newArr.sort((a,b) => b - a)
    for(let i = 0; i < person.length; i++){
      if(newArrSorted[0] === (person[i].yearOfDeath - person[i].yearOfBirth)){
        return person[i]
    }else if(!person[i].yearOfDeath){
        return person[i]
    }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
