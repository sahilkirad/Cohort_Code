/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    vowels=['a','e','i','o','u','A','E','I','O','U'];
    var numb_count=0;
    for(let char of str)
    {
      if(vowels.includes(char))
      {
        numb_count+=1;
      }
    }
    return numb_count;
}

module.exports = countVowels;