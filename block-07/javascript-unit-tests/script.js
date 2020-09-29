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
const arrayWithCopyValue = myRemove(arrayValue, 3);

assert.deepStrictEqual(arrayWithCopyValue, [1, 2, 4]);
assert.notDeepStrictEqual(arrayWithCopyValue, [1, 2, 3, 4]);
assert.deepStrictEqual(arrayValue, [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove(arrayValue, 5), [1, 2, 3, 4]);

// 3
function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const arrayWithoutCopyValue = myRemoveWithoutCopy(arrayValue, 3);

assert.deepStrictEqual(arrayValue, [1, 2, 4]);
assert.notDeepStrictEqual(arrayValue, [1, 2, 3, 4]);
assert.deepStrictEqual(arrayValue, [1, 2, 4]);
assert.deepStrictEqual(myRemoveWithoutCopy(arrayValue, 5), [1, 2, 4]);
