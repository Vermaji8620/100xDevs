/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  str = str.toLowerCase(str);
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (
      str[index] == "a" ||
      str[index] == "e" ||
      str[index] == "o" ||
      str[index] == "i" ||
      str[index] == "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
