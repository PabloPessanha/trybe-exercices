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
  it('Para o caso em que o usuário é encontrado.', async () => {
    return findUserById(4).then((response) => {
      expect(response).toEqual({ name: 'Mark' });
    });
  });

  it('Para o caso em que o usuário NÃO é encontrado.', async () => {
    const number = 80;

    return findUserById(number).catch((error) => {
      expect(error).toEqual({ error: `User with ${number} not found.` });
    });
    // expect(undefined_user).;
  });
});
