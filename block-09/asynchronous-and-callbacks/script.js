const assert = require('assert');

// 1
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;
let timeRunned = 0;

const getUser = () => {
  const userToReturn = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
    checkTimes(value) {
      const { firstName, lastName, nationality } = userToReturn;
      if (value === 0) {
        timeRunned += 1;
        return userFullName({ firstName, lastName });
      }

      return userNationality({ firstName, nationality });
    },
  };

  return userToReturn.checkTimes(timeRunned);
};

assert.strictEqual(getUser(), 'Hello! My name is Ivan Ivanovich'); // complete a chamada da função de getUser
assert.strictEqual(getUser(), 'Ivan is Russian'); // complete a chamada da função de getUser
