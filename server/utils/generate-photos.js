const Chance = require("chance");
const chance = new Chance();
const PHOTOS_FOR_ALBUM = 50;

function generatePhotos(n) {
  const albums = require("./generate-albums.js");
  const photos = [];
  let idCounter = 1;
  albums.forEach((album) => {
    for (let i = 1; i <= n; i++, idCounter++) {
      photos.push(generatePhoto(idCounter, album));
    }
  });
  return photos;
}

function generatePhoto(i, album) {
  return {
    id: i,
    albumId: album.id,
    title: chance
      .sentence({ words: Math.floor(Math.random() * 3 + 5) })
      .slice(0, -1),
    url: chance.avatar({ fileExtension: "jpg", protocol: "https" }),
  };
}

module.exports = generatePhotos(PHOTOS_FOR_ALBUM);
