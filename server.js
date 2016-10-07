var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var app = express();
var PORT = process.env.PORT || 1337;

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/typeahead', cors(corsOptions), require('./controllers/typeahead'));

app.get('/resolver', cors(corsOptions), require('./controllers/resolver'));

app.listen(PORT);
console.log('Server running on port ' + PORT);