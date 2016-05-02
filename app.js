var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('welcome to home page!');
});

app.get('/about', function (req, res) {
  res.send('welcome to about page!');
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
