// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solução pego no seguinte link -> https://bit.ly/35G9kkx
const reverseInteger = (num) =>
  parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

module.exports = reverseInteger;
