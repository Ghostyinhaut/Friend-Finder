var express = require('express');
var path = require('path');
var app = express.Router();
var friends = require("../data/friends");

//create path of home page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});
//create path of survey-questions
app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/survey.html'));
});

//create path to see data in database
app.get('/api/friends', function(req, res) {
    return res.json(friends);
  });


module.exports = app;