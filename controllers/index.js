const express = require('express');
const router = new express.Router();

const filmRouter = require('./films.js');
// or ./bundle.js?
router.use('/films', filmRouter);

router.get('/', function (req, res) {
  res.json({ data: 'Hello!' });
});


module.exports = router;
