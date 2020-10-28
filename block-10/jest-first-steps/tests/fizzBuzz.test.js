const func = require('../src/fizzBuzz');
const { myFizzBuzz } = func;

describe('A função recebe um valor e com base no que for divisível(3 ou 5), ele pode retornar fizz, buzz ou fizzbuzz', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('teste')).toBe(false);
  });
});
