const funcs = require('./script');
const { uppercase, findUserById, getUserName, users } = funcs;

// 1
describe('Escreva um teste que verifique a chamada do callback de uma função "uppercase".', () => {
  it('teste se ele voltara com a palavra em maiscula', () => {
    expect(uppercase('algo', (word) => word)).toBe('ALGO');
  });
});

//2
describe('Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função.', () => {
  it('Para o caso em que o usuário é encontrado.', () => {
    return findUserById(4).then((response) => {
      expect(response).toEqual({ name: 'Mark' });
    });
  });

  it('Para o caso em que o usuário NÃO é encontrado.', () => {
    const number = 80;

    return findUserById(number).catch((error) => {
      expect(error).toEqual({ error: `User with ${number} not found.` });
    });
  });
});

// 3
describe('Repita os testes anteriores, dessa vez ultiziando async e await', () => {
  it('Caso o usúario seja encontrado, retorne um objeto com seu nome, caso contrario, um erro', async () => {
    try {
      const response1 = await findUserById(4);
      const response2 = await findUserById(80);

      expect(response1).toEqual({ name: 'Mark' });
    } catch (error) {
      expect(error).toEqual({ error: `User with 80 not found.` });
    }
  });
});
