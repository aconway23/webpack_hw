//since we don't have a database we'll use our front end models at the moment
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');
const getFilms = require('../client/src/models/films');
const films = getFilms();

const express = require('express');
const filmRouter = new express.Router();

// const films = []

filmRouter.get('/', function (req, res) {
  res.json(films);
});

module.exports = filmRouter;
