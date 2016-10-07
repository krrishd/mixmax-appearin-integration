var request = require('request');
var APPEARIN_API_URL = 'https://api.appear.in';

module.exports = function(req, res) {
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
}