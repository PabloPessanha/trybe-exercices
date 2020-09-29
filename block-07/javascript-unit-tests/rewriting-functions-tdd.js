const assert = require('assert');
// 1
{
  const greetPeople = (people) => {
    const greetingArray = [];
    const allPeople = people;
    allPeople.forEach((people) => {
      greetingArray.push(`Hello ${people}`);
    });
    return greetingArray;
  };

  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.deepStrictEqual(greetPeople(parameter), result);
}
// 2
{
  const removeVowels = (word) => {
    const characters = word.split('');
    let result = '';
    let value = 1;
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        result += value;
        value += 1;
      } else {
        result += characters[i];
      }
    }
    return result;
  };

  const parameter = 'Dayane';
  const result = 'D1y2n3';

  assert.strictEqual(removeVowels(parameter), result);
}
// 3
{
  const greaterThanTen = (array) => {
    const greatestNumbers = [];
    const allNumbers = array;
    allNumbers.forEach((number) => {
      if (number > 10) {
        greatestNumbers.push(number);
      }
    });
    return greatestNumbers;
  };

  const parameter = [4, 10, 32, 9, 21];
  const result = [32, 21];

  assert.deepStrictEqual(greaterThanTen(parameter), result);
}
