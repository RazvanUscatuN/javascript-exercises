const removeFromArray = function(mainArray, ...eliminatedElements) {

    // it compare the each element from eliminatedElements with the main array
    for(let i = 0; i< eliminatedElements.length; i++){
       //remove the common element
        if(mainArray.indexOf(eliminatedElements[i]) > -1){
            mainArray.splice(mainArray.indexOf(eliminatedElements[i]), 1);
        }
    }
    
    return mainArray;
};

// Do not edit below this line
module.exports = removeFromArray;
