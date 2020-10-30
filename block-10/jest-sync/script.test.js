const funcs = require('./script');
const { uppercase, findUserById, getRepos, getAnimal } = funcs;

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
      await findUserById(80);

      expect(response1).toEqual({ name: 'Mark' });
    } catch (error) {
      expect(error).toEqual({ error: `User with 80 not found.` });
    }
  });
});

// 4
describe('Verifique e teste as respostas de uma API.', () => {
  it('Verifique se 3 repostirios se encontram na lista', async () => {
    const API_URL = 'https://api.github.com/users/tryber/repos';
    const response = await getRepos(API_URL);
    expect.assertions(3);

    expect(response).not.toContain('sd-01-week4-5-project-todo-list');
    expect(response).not.toContain('sd-01-week4-5-project-meme-generator');
    expect(response).toContain('sd-00-block5-project-pixels-art');
  });
});

//5
/*
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
*/

//6
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
