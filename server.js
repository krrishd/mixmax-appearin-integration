var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var app = express();
var APPEARIN_API_URL = 'https://api.appear.in';
var PORT = process.env.PORT || 1337;

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/typeahead', cors(corsOptions), function(req, res) {
  res.json([{
    text: "...",
    title: "This'll embed a link to a videoconference for you and your recipient"
  }])
});

app.get('/resolver', cors(corsOptions), function(req, res) {
  var url = APPEARIN_API_URL + '/random-room-name';
  request({
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    url: url,
    form: {},
    method: 'POST'
  }, function(err, response, body) {
    var randomRoomName = JSON.parse(body).roomName;
    var html = '<a style="' +
      'display: block; padding: 10px; ' +
      'box-shadow: 1px 1px 3px 1px rgba(0,0,0,.02); ' +
      'font-size: 15px; ' +
      'border-radius: 5px; ' +
      'text-decoration: none; font-family: sans-serif; font-weight: 300;' +
      'border: 2px solid #9A12B3; color: #9A12B3;" ' +
      'href="https://appear.in' +
      randomRoomName + 
      '">Enter videoconference</a>';
    res.json({
      body: html
    });
  });
});

app.listen(PORT);
console.log('Server running on port ' + PORT);