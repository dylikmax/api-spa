const express = require("express");
const cors = require("cors");
const validation = require("./validations/query.validation.js");
const filterByQuery = require("./helpers/filter.js");
const users = require("./utils/generate-users.js");
const albums = require("./utils/generate-albums.js");
const photos = require("./utils/generate-photos.js");

const USERS_ALLOWED_PARAMS = Object.keys(users[0]);
const ALBUMS_ALLOWED_PARAMS = Object.keys(albums[0]);
const PHOTOS_ALLOWED_PARAMS = Object.keys(photos[0]);

const app = express();
app.use(cors());



app.get("/users", validation(USERS_ALLOWED_PARAMS), (req, res) => {
  res.json(filterByQuery(users, req.query));
});

app.get("/users/:id", validation(USERS_ALLOWED_PARAMS), (req, res) => {
  const id = +req.params.id;
  const user = users.find(user => user.id === id)
  if (!user) {
    return res.status(404).json();
  }

  res.json(filterByQuery([user], req.query)[0]);
});

app.get("/users/:id/albums", validation(ALBUMS_ALLOWED_PARAMS), (req, res) => {
  const id = +req.params.id;
  const user = users.find(user => user.id === id)
  if (!user) {
    return res.status(404).json();
  }

  res.json(filterByQuery(albums, {...req.query, userId: id}));
});



app.get("/albums", validation(ALBUMS_ALLOWED_PARAMS), (req, res) => {
  res.json(filterByQuery(albums, req.query));
});

app.get("/albums/:id", validation(ALBUMS_ALLOWED_PARAMS), (req, res) => {
  const id = +req.params.id;
  const album = albums.find(album => album.id === id)
  if (!album) {
    return res.status(404).json();
  }

  res.json(filterByQuery([album], req.query)[0]);
});

app.get("/albums/:id/photos", validation(PHOTOS_ALLOWED_PARAMS), (req, res) => {
  const id = +req.params.id;
  const album = albums.find(album => album.id === id)
  if (!album) {
    return res.status(404).json();
  }

  res.json(filterByQuery(photos, {...req.query, albumId: id}));
});




app.get("/photos", validation(PHOTOS_ALLOWED_PARAMS), (req, res) => {
  res.json(filterByQuery(photos, req.query));
});

app.get("/photos/:id", validation(PHOTOS_ALLOWED_PARAMS), (req, res) => {
  const id = +req.params.id;
  const photo = photos.find(photo => photo.id === id)
  if (!photo) {
    return res.status(404).json();
  }

  res.json(filterByQuery([photo], req.query)[0]);
});

app.listen(8080, () => {});
