// 1
const uppercase = (str, callback) => callback(str.toUpperCase());

// 2
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

async function geraNome() {
  const nome = await findUserById(4);
  console.log(nome);
}
geraNome();
module.exports = { uppercase, findUserById, getUserName, users };
