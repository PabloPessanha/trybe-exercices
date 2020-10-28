const objects = require('../src/compareObjects');
const { obj1, obj2, obj3 } = objects;

describe('Compare os objetos entre si para ver se são iguais', () => {
  it('Compare o primeiro objeto com o segundo', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Compare o primeiro objeto com o terceiro', () => {
    expect(obj1).not.toEqual(obj3);
  });

  it('Compare o segundo objeto com o terceiro', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
