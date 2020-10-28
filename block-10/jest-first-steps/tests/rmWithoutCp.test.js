const func = require('../src/rmWithoutCp');
const { myRemoveWithoutCopy } = func;

describe('A função recebe um array e retorna o mesmo sem o elemento item caso ele exista no array', () => {
  it('Verifique se a chamada retorna o array esperado', () => {
    const expected_result = [1, 2, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual(expected_result);
  });

  it('Verifique se a mesma chamada não retorna o array [1, 2, 3, 4]', () => {
    const not_expected_result = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual(not_expected_result);
  });

  it('Faça uma chamada para a funçãoe verifique se o array passado por parâmetro sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 3);

    const expected_result = [1, 2, 4];
    expect(arr).toEqual(expected_result);
  });

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const expected_result = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual(expected_result);
  });
});
