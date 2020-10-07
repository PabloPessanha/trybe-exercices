const assert = require('assert');

// 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

for (rectangle of rectangles) {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]);
}

// 2

const sum = (sums = 0, ...values) => {
  if (values.length >= 1) return sums + values.reduce((acc, value) => (acc += value));
  return sums;
};

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
