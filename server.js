// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(express.static('app/data/friends'))

// 
// =============================================================

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

app.get('/api/friends', function(req, res) {

})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
})