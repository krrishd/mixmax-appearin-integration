var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var app = express();

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/resolver', cors(corsOptions), function(req, res) {

});