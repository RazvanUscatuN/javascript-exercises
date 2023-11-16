const sumAll = function(startNumber, lastNumber) {
    //sum all numbers between start and last(inclusive)
    if(startNumber < 0 || lastNumber < 0) return "ERROR";
    else if(typeof(startNumber) != "number" || typeof(lastNumber) != "number"){
         return "ERROR";
    }

    let total = 0;
    //it works even if start number is bigger
    if(startNumber > lastNumber){
        for(let i = lastNumber; i <= startNumber; i++){
            total += i;
        }
    } else if (startNumber < lastNumber){
        for(let i = startNumber; i <= lastNumber; i++){
            total += i;
        }
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
