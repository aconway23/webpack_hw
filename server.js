const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// ?
app.use(express.static('client/public'));

const router = require('./controllers/index.js');
app.use(router);

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(3000, function () {
  console.log(`Films app listening on port ${ this.address().port }`);
});
