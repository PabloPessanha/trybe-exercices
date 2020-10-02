const assert = require('assert');

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const expected_disciplines = [
  { nome: 'Jorge', materia: 'Português' },
  { nome: 'Mario', materia: 'Biologia' },
  { nome: 'Jorge', materia: 'Português' },
  { nome: 'Maria', materia: 'Química' },
  { nome: 'Natalia', materia: 'Português' },
  { nome: 'Wilson', materia: 'Português' },
];

function bestDiscipline() {
  return estudantes.map((estudante) => {
    return {
      nome: estudante.nome,
      materia: estudante.materias.reduce((bigger, number) => {
        if (bigger.nota > number.nota) return bigger;
        return number;
      }).name,
    };
  });
}

// 1
const arrays = [['1', '2', '3'], [true], [4, 5, 6]];
const expected_array = ['1', '2', '3', true, 4, 5, 6];

// Solução encontrada na documentação -> https://mzl.la/3l8yka2 - 2 métodos diferentes para mesma solução
function flatten() {
  // return arrays.flat();
  return arrays.reduce((emptyArray, arrayValue) => emptyArray.concat(arrayValue), []);
}
////////////////////////////
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2
const expected_names = `Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.`;

function allNames() {
  return books.reduce((names, book) => {
    if (book.id < books.length) return (names += ` ${book.author.name},`);
    return (names += ` ${book.author.name}.`);
  }, 'Nomes:');
}

// 3
const expected_result_media_age = 43;

function averageAge() {
  return (
    books.reduce((sum, book) => (sum += book.releaseYear - book.author.birthYear), 0) / books.length
  );
}

// 4
const expected_result_bigger_name = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function longestNamedBook() {
  const bigger = books.reduce((bigger, book) => {
    if (bigger.name.length > book.name.length) return bigger;
    return book;
  });
  const formattedBigger = Object.fromEntries(Object.entries(bigger).sort());
  return formattedBigger;
}

assert.deepStrictEqual(bestDiscipline(), expected_disciplines);
assert.deepStrictEqual(flatten(), expected_array);
assert.deepStrictEqual(allNames(), expected_names);
assert.strictEqual(averageAge(), expected_result_media_age);
assert.deepStrictEqual(longestNamedBook(), expected_result_bigger_name);
