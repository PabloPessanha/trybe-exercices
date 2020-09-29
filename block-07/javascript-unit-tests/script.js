const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {
  sum(4, '5');
}, Error);
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);

// 2
function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const arrayValue = [1, 2, 3, 4];
const arrayNewValue = myRemove(arrayValue, 3);
assert.deepStrictEqual(arrayNewValue, [1, 2, 4]);
assert.notDeepStrictEqual(arrayNewValue, [1, 2, 3, 4]);
assert.deepStrictEqual(arrayValue, [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove(arrayValue, 5), [1, 2, 3, 4]);
