const palindromes = function (stringPalindromes) {
  let result = "";
  result = stringPalindromes.toLowerCase();
  //eliminate all the white space
  result = result.replaceAll(" ", "");

  //eliminate all the punctuation
  result = result.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");

  //make the words backwards
  let backwards = result.split("").reverse().join("");

  //compare the words, if same return true else false
  if (result == backwards) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
