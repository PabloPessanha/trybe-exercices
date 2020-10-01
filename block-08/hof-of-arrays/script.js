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

//1
function authorBornIn1947() {
  const bookAuthor = books.find((book) => book.author.birthYear === 1947);
  return bookAuthor.author.name;
}

// 2
function smallerName() {
  let nameBook = books[0].name;

  books.forEach((book) => {
    if (book.name.length < nameBook.length) nameBook = book.name;
  });

  return nameBook;
}

// 3
const expected_result = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};
function getNamedBook() {
  const greatestBook = books.find((book) => book.name.length === 26);
  return greatestBook;
}

// 4
const expected_result_order = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  const descendingBooks = [];
  const descendingYears = [];
  books.forEach((book) => {
    descendingYears.push(book.releaseYear);
  });
  descendingYears.sort().reverse();
  descendingYears.forEach((year) => {
    const newPush = books.find((book) => book.releaseYear === year);
    descendingBooks.push(newPush);
  });
  return descendingBooks;
}

// 5
const expected_result_age = false;

function everyoneWasBornOnSecXX() {
  let bool = true;
  books.forEach((book) => {
    if (book.author.birthYear < 1901) bool = false;
  });
  return bool;
}

// 6
const expected_result_release = true;

function someBookWasReleaseOnThe80s() {
  let bool = false;
  books.forEach((book) => {
    if (book.releaseYear >= 1980 && book.releaseYear <= 1989) bool = true;
  });
  return bool;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');
assert.strictEqual(smallerName(), 'Duna');
assert.deepStrictEqual(getNamedBook(), expected_result);
assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expected_result_order);
assert.strictEqual(everyoneWasBornOnSecXX(), expected_result_age);
assert.equal(someBookWasReleaseOnThe80s(), expected_result_release);
