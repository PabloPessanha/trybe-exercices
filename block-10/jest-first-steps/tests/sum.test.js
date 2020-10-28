const sum = require('../src/sum');
const { sumNumbers } = sum;

describe('Testes para soma', () => {
  it('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    const numbers = [1, 2];

    expect(sumNumbers(...numbers)).toEqual(3);
  });

  it('Teste se o retorno de sum(4, 5) é 9', () => {
    const numbers = [4, 5];

    expect(sumNumbers(...numbers)).toEqual(9);
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    const numbers = [0, 0];

    expect(sumNumbers(...numbers)).toEqual(0);
  });

  it('Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)', () => {
    const numbers = [4, '5'];

    expect(() => sumNumbers(numbers)).toThrow(Error);
  });

  it('Teste se a mensagem de erro é "parameters must be numbers" quando tem string', () => {
    expect(sumNumbers).toThrow(new Error ('parameters must be numbers'));
  });
});