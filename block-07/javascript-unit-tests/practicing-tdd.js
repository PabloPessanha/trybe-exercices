const assert = require('assert');
// 1
// escreva a função addOne aqui
function addOne(collection) {
  const arrays = collection;
  const newArray = [];
  arrays.forEach((array) => {
    newArray.push(array + 1);
  });
  return newArray;
}
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
