const Chance = require("chance");
const chance = new Chance();
const ALBUMS_FOR_USER = 10;

function generateAlbums(n) {
  const users = require("./generate-users.js");
  const albums = [];
  let idCounter = 1;
  users.forEach((user) => {
    for (let i = 1; i <= n; i++, idCounter++) {
      albums.push(generateAlbum(idCounter, user));
    }
  });
  return albums;
}

function generateAlbum(i, user) {
  return {
    id: i,
    userId: user.id,
    title: chance
      .sentence({ words: Math.floor(Math.random() * 5 + 3) })
      .slice(0, -1),
  };
}

module.exports = generateAlbums(ALBUMS_FOR_USER);
