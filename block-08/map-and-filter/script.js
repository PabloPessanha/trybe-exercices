const assert = require('assert');

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

// 1
const expected_result_formated = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  const formatedBooks = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  return formatedBooks;
}

// 2
const expected_result_author_age = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  const writers = books.map((book) => book.author.name);
  const ages = books.map((book) => book.releaseYear - book.author.birthYear);
  const nameWithAge = [];
  for (let index in writers) {
    nameWithAge.push({ age: ages[index], author: writers[index] });
  }
  nameWithAge.sort((a, b) => a.age - b.age);
  return nameWithAge;
}

// 3
const expected_result_genre = [
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
];

function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
}

// 4
const expected_result_release = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

// 5
function oldBooks() {
  const olders = books.filter((book) => 2020 - book.releaseYear >= 60);
  return olders.sort((a, b) => a.releaseYear - b.releaseYear);
}
const expected_result_name_by_genre = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const genres = books.filter(
    (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
  );
  const authors = genres.map((book) => book.author.name).sort();
  return authors;
}

// 6
const expected_result_old_names = ['O Senhor dos Anéis', 'Fundação', 'O Chamado de Cthulhu'];

function oldBooksNames() {
  const olders = books.filter((book) => 2020 - book.releaseYear >= 60);
  return olders.map((book) => book.name);
}

//7
const expected_result_3dots = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const writterSplitted = books.filter((book) => book.author.name.split('.').length >= 4);
  return writterSplitted[0].name;
}

assert.deepStrictEqual(formatedBookNames(), expected_result_formated);
assert.deepStrictEqual(nameAndAge(), expected_result_author_age);
assert.deepStrictEqual(fantasyOrScienceFiction(), expected_result_genre);
assert.deepStrictEqual(oldBooks(), expected_result_release);
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expected_result_name_by_genre);
assert.deepStrictEqual(oldBooksNames(), expected_result_old_names);
assert.deepStrictEqual(authorWith3DotsOnName(), expected_result_3dots);
