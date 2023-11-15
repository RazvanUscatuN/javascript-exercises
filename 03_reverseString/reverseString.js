const reverseString = function(string) {
    let stringLength = string.length;
    let stringReverse = "";
    let lastLetter;

    if (stringLength < 1) return string;

    // It reverse the string taking the last letter and adding to a new string
    for(let i = 0; i < string.length; i++){
        lastLetter = string.substr(stringLength -1, 1)
        stringReverse += lastLetter;
        stringLength--;
    }
    return stringReverse;

};

// Do not edit below this line
module.exports = reverseString;
