const funcs = require('./script');
const { sum } = funcs;

describe('dont let me down', () => {
  it('itch', () => {
    expect(sum).toEqual(5);
  });
});
