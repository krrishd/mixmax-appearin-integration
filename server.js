var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var AppearIn = require('appearin-sdk');
var appearin = new AppearIn();

var app = express();

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/resolver', cors(corsOptions), function(req, res) {
  
});