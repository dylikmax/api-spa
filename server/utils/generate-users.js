const Chance = require("chance");
const chance = new Chance();
const USER_COUNT = 10;

function generateUsers(n) {
  const users = [];
  for (let i = 1; i <= n; i++) {
    const user = generateUser(i);
    users.push(user);
  }
  return users;
}

function generateUser(i) {
  return {
    id: i,
    name: chance.name(),
    username: chance.last(),
    email: chance.email({ domain: "supermegamail.fff" }),
    phone: chance.phone({ country: "us", mobile: true }),
    avatarUrl: Math.random() > 0.5 ? chance.avatar({ fileExtension: "jpg", protocol: "https" }) : null
  };
}

module.exports = generateUsers(USER_COUNT);
