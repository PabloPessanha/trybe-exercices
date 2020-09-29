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
