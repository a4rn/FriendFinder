// Dependencies
// =============================================================
var express = require('express');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
  //res.send("Welcome to the Friend Finder Page!")
  res.sendFile(path.join(__dirname + '/app/public/home.html'));
})

app.get('/survey', function(req, res) {
  //res.send("sends Survey Page!")
  res.sendFile(path.join(__dirname + '/app/public/survey.html'));
})