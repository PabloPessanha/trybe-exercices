const assert = require('assert');
// 1
// escreva a função addOne aqui
{
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
}
// 2
// escreva a função wordLengths aqui
{
  function wordLengths(sentence) {
    const arrays = sentence;
    const newArray = [];
    arrays.forEach((array) => {
      newArray.push(array.length);
    });
    return newArray;
  }

  const words = ['sun', 'potato', 'roundabout', 'pizza'];
  const expected = [3, 6, 10, 5];

  assert.strictEqual(typeof wordLengths, 'function');
  const output = wordLengths(words);
  assert.deepStrictEqual(output, expected);
}
// 3
// escreva a função addAllnumbers aqui
{
  function addAllnumbers(numbers) {
    const array = numbers;
    let finalSum = 0;
    array.forEach((number) => {
      finalSum += number;
    });
    return finalSum;
  }
  const numbers = [9, 23, 10, 3, 8];
  const expected = 53;
  const output = addAllnumbers(numbers);

  assert.strictEqual(typeof addAllnumbers, 'function');
  assert.strictEqual(output, expected);
}
