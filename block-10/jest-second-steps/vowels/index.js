// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowelsQty = (string) => {
  words = string.toLowerCase().split('');
  return words.reduce((acc, word) => {
    if (word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u')
      return (acc += 1);
    return acc;
  }, 0);
};

module.exports = vowelsQty;
