const fetch = require('node-fetch');

// 1
const uppercase = (str, callback) => callback(str.toUpperCase());

// 2 e 3
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => findUserById(userID).then((user) => user.name);

// 4
const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// 6
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    const arrayNames = Animals.filter((animal) => animal.name.toLowerCase() === name.toLowerCase());
    if (arrayNames.length !== 0) resolve(...arrayNames);

    reject('Nenhum animal com esse nome!');
  });
};

const getAnimal = (name) => findAnimalByName(name).then((list) => list);

module.exports = { uppercase, findUserById, getRepos, getAnimal, findAnimalByName };
